export const publicationEntries = [
  {
    badge: "ACL 2026 Main",
    title: "SpecMind: Cognitively Inspired, Interactive Multi-Turn Framework for Postcondition Inference",
    authors: ["Cuong Chi Le", "Minh V. T. Pham", "Tung Duy Vu", "Cuong Duc Van", "Hoang Nhat Phan", "Huy Nhat Phan", "Tien N. Nguyen"],
    author_index: 0,
    img: "Specmind.png",
    abstract:
      "Specifications are vital for ensuring program correctness, yet writing them manually remains challenging and time-intensive. Recent large language model (LLM)-based methods have shown successes in generating specifications such as postconditions, but existing single-pass prompting often yields inaccurate results. In this paper, we present SpecMind, a novel framework for postcondition generation that treats LLMs as interactive and exploratory reasoners rather than one-shot generators. SpecMind employs feedback-driven multi-turn prompting approaches, enabling the model to iteratively refine candidate postconditions by incorporating implicit and explicit correctness feedback, while autonomously deciding when to stop. This process fosters deeper code comprehension and improves alignment with true program behavior via exploratory attempts. Our empirical evaluation shows that SpecMind significantly outperforms state-of-the-art approaches in both accuracy and completeness of generated postconditions.",
    url: "https://arxiv.org/abs/2602.20610",
  },
  {
    badge: "ICSE 2026",
    title: "TestWeaver: Execution-aware, Feedback-driven Regression Testing Generation with Large Language Models",
    authors: ["Cuong Chi Le", "Cuong Duc Van", "Tung Duy Vu", "Minh V. T. Pham", "Hoang Nhat Phan", "Huy Nhat Phan", "Tien N Nguyen"],
    author_index: 0,
    img: "TestWeaver.png",
    abstract:
      "While recent advances in large language models (LLMs) have shown promise in automating test generation for regression testing, they often suffer from limited reasoning about program execution, resulting in stagnated coverage growth - a phenomenon known as the coverage plateau. This paper presents TestWeaver, a novel LLM-based approach that integrates lightweight program analysis to create a focused execution context that assists LLMs in better test generation. TestWeaver strategically chooses the following components to overcome LLMs' limited reasoning on complex execution: (1) it reduces hallucinations and improves focus by supplying the LLM with the backward slice from the target line instead of a full program context; (2) it identifies and incorporates close test cases - those that share control-flow similarities with the path to the target line - to provide focused execution context within the LLM's context window; and (3) it enhances LLM's reasoning with execution in-line annotations that encode variable states as comments along the executed path. By equipping LLMs with these targeted and contextualized inputs, it improves coverage-guided test generation and mitigates redundant explorations. Empirical results show that TestWeaver accelerates code coverage growth and generates more effective test cases than the state-of-the-art approaches.",
    url: "https://arxiv.org/abs/2508.01255",
  },
  {
    badge: "ICSE 2026",
    award_badge: "ACM SIGSOFT Distinguished Paper Award",
    title: "SWE-Synth: Synthesizing Verifiable Bug-Fix Data to Enable Large Language Models in Resolving Real-World Bugs",
    authors: ["Minh V. T. Pham", "Huy N. Phan", "Hoang Nhat Phan", "Cuong Chi Le", "Tien N. Nguyen", "Nghi D. Q. Bui"],
    author_index: 3,
    img: "Swe-Synth.png",
    abstract:
      "Large language models (LLMs) are transforming automated program repair (APR) through agent-based approaches that localize bugs, generate patches, and verify fixes. However, the lack of high-quality, scalable training datasets, especially those with verifiable outputs and intermediate reasoning traces-limits progress, particularly for open-source models. In this work, we present SWE-Synth, a framework for synthesizing realistic, verifiable, and process-aware bug-fix datasets at the repository level. SWE-Synth leverages LLM agents to simulate debugging workflows, producing not only bug-fix pairs but also test cases and structured repair trajectories. Compared to manually curated datasets, our method scales with minimal human effort while preserving contextual richness and correctness. Experiments show that models trained on SWE-Synth outperform those trained on real-world datasets by 2.3% on SWE-Bench Lite. Our results highlight the potential of synthetic, agent-generated data to advance the state of the art in APR and software engineering automation.",
    url: "https://arxiv.org/abs/2504.14757",
  },
  {
    badge: "NAACL 2025",
    title: "VisualCoder: Guiding Large Language Models in Code Execution with Fine-grained Multimodal Chain-of-Thought Reasoning",
    authors: ["Cuong Chi Le", "Hoang-Chau Truong-Vinh", "Huy Nhat Phan", "Dung Duy Le", "Tien N. Nguyen", "Nghi D. Q. Bui"],
    author_index: 0,
    img: "VisualCoder.png",
    abstract:
      "Predicting program behavior and reasoning about code execution remain significant challenges in software engineering, particularly for large language models (LLMs) designed for code analysis. While these models excel at understanding static syntax, they often struggle with dynamic reasoning tasks. We introduce VisualCoder, a simple yet effective approach that enhances code reasoning by integrating multimodal Chain-of-Thought (CoT) reasoning with a visual Control Flow Graph (CFG). By aligning code snippets with their corresponding CFGs, VisualCoder provides deeper insights into execution flows. We address challenges in multimodal CoT integration through a reference mechanism, ensuring consistency between code and its execution path, thereby improving performance in program behavior prediction, error detection, and output generation.",
    url: "https://aclanthology.org/2025.findings-naacl.370/",
  },
  {
    badge: "FORGE 2025",
    title: "CodeFlow: Program Behavior Prediction with Dynamic Dependencies Learning",
    authors: ["Cuong Chi Le", "Hoang Nhat Phan", "Huy Nhat Phan", "Tien N. Nguyen", "Nghi D. Q. Bui"],
    author_index: 0,
    img: "CodeFlow.png",
    abstract:
      "Predicting program behavior without execution is a critical task in software engineering. Existing models often fall short in capturing the dynamic dependencies among program elements. To address this, we present CodeFlow, a novel machine learning-based approach that predicts code coverage and detects runtime errors by learning both static and dynamic dependencies within the code. By using control flow graphs (CFGs), CodeFlow effectively represents all possible execution paths and the statistic relations between different statements, providing a more comprehensive understanding of program behaviors. CodeFlow constructs CFGs to represent possible execution paths and learns vector representations (embeddings) for CFG nodes, capturing static control-flow dependencies. Additionally, it learns dynamic dependencies by leveraging execution traces, which reflect the impacts among statements during execution. This combination enables CodeFlow to accurately predict code coverage and identify runtime errors. Our empirical evaluation demonstrates that CodeFlow significantly improves code coverage prediction accuracy and effectively localizes runtime errors, outperforming state-of-the-art models.",
    url: "https://conf.researchr.org/details/forge-2025/forge-2025-papers/13/CodeFlow-Program-Behavior-Prediction-with-Dynamic-Dependencies-Learning",
  },
  {
    badge: "Preprint",
    title: "Semantic Evolution over Populations for LLM-Guided Automated Program Repair",
    authors: ["Cuong Chi Le", "Minh Le-Anh", "Cuong Duc Van", "Tien N. Nguyen"],
    author_index: 0,
    img: "",
    abstract:
      "Large language models (LLMs) have recently shown strong potential for automated program repair (APR), particularly through iterative refinement that generates and improves candidate patches. However, state-of-the-art iterative refinement LLM-based APR approaches cannot fully address challenges, including maintaining useful diversity among repair hypotheses, identifying semantically related repair families, composing complementary partial fixes, exploiting structured failure information, and escaping structurally flawed search regions. In this paper, we propose a Population-Based Semantic Evolution framework for APR iterative refinement, called EvolRepair, that formulates LLM-based APR as a semantic evolutionary algorithm. EvolRepair reformulates the search paradigm of classic genetic algorithm for APR, but replaces its syntax-based operators with semantics-aware components powered by LLMs and structured execution feedback. Candidate repairs are organized into behaviorally coherent groups, enabling the algorithm to preserve diversity, reason over repair families, and synthesize stronger candidates by recombining complementary repair insights across the population. By leveraging structured failure patterns to guide search direction, EvolRepair can both refine promising repair strategies and shift toward alternative abstractions when necessary. Our experiments show that EvolRepair substantially improves repair effectiveness over existing LLM-based APR approaches.",
    url: "https://arxiv.org/abs/2604.02134",
  },
  {
    badge: "Preprint",
    title: "Enhancing Program Repair with Specification Guidance and Intermediate Behavioral Signals",
    authors: ["Minh Le-Anh*", "Cuong Chi Le*", "Tien N. Nguyen"],
    author_index: [0, 1],
    author_note: "*co-first author",
    img: "",
    abstract:
      "Automated Program Repair (APR) has recently benefited from large language models (LLMs). However, most LLM-based APR approaches still rely primarily on coarse end-to-end signals from test-suite outcomes to guide repair, providing limited insight into where a program's internal logic deviates from its intended behavior. In contrast, human debugging often relies on intermediate reasoning about program states through localized correctness conditions or assertions. Inspired by this observation, we propose SpecTune, a specification-guided debugging framework that incorporates intermediate behavioral reasoning into APR. SpecTune decomposes the repair task into suspicious regions connected by execution checkpoints and derives localized postconditions representing expected program behaviors at those points. By executing the buggy program and evaluating these postconditions, SpecTune produces micro-level debugging signals that indicate mismatches between observed and intended behaviors, enabling more precise fault localization and targeted patch generation. To address the potential unreliability of LLM-generated postconditions, we introduce two complementary signals: a specification validation signal alpha, which estimates the consistency of generated postconditions using partially passing test cases, and a discriminative signal beta, which detects violations of validated postconditions during execution. With these signals, SpecTune safely leverages automatically generated specifications for APR. Experimental results show that SpecTune improves fault localization and APR effectiveness than the baselines.",
    url: "https://arxiv.org/abs/2604.11770",
  },
  {
    badge: "Preprint",
    title: "When Names Disappear: Revealing What LLMs Actually Understand About Code",
    authors: ["Cuong Chi Le", "Minh V. T. Pham", "Cuong Duc Van", "Hoang N Phan", "Huy N Phan", "Tien N. Nguyen"],
    author_index: 0,
    img: "obfuscation.png",
    abstract:
      "Large Language Models (LLMs) achieve strong results on code tasks, but how they derive program meaning remains unclear. We argue that code communicates through two channels: structural semantics, which define formal behavior, and human-interpretable naming, which conveys intent. Removing the naming channel severely degrades intent-level tasks such as summarization, where models regress to line-by-line descriptions. Surprisingly, we also observe consistent reductions on execution tasks that should depend only on structure, revealing that current benchmarks reward memorization of naming patterns rather than genuine semantic reasoning. To disentangle these effects, we introduce a suite of semantics-preserving obfuscations and show that they expose identifier leakage across both summarization and execution. Building on these insights, we release ClassEval-Obf, an obfuscation-enhanced benchmark that systematically suppresses naming cues while preserving behavior. Our results demonstrate that ClassEval-Obf reduces inflated performance gaps, weakens memorization shortcuts, and provides a more reliable basis for assessing LLMs' code understanding and generalization.",
    url: "https://arxiv.org/abs/2510.03178",
  },
];

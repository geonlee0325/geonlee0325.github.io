<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>About Me</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto|Noto+Sans|Open+Sans|Source+Sans+Pro|Noto+Sans+KR" rel="stylesheet">

    <style>
        body {
            font-family: 'Open Sans', sans-serif;
            color: #333;
            max-width: 900px;
            margin: auto;
            padding: 30px;
        }
        .title-container {
            text-align: center;
            margin-top: 20px;
        }
        h1 {
            font-size: 24px;
        }
        ul {
          padding: 0; /* Removes the default padding */
        }
        ul li {
          margin-bottom: 10px; /* Adds space below each list item */
        }
        ul li:not(:last-child) {
          margin-bottom: 10px; /* Or use padding-bottom for inside space */
        }
        a {
          color: #007BFF; /* Deep blue */
          text-decoration: none; /* Optional: removes the underline */
          transition: color 0.3s ease; /* Smooth transition for hover effect */

        }
        .arxiv {
          color: gray; /* Deep blue */
          text-decoration: none; /* Optional: removes the underline */
          transition: color 0.3s ease; /* Smooth transition for hover effect */
          font-weight: 1000;
        }
        .arxiv:hover {
          color: #FFA500;
          font-weight: 900;
        }
        .conf {
          color: #0F52BA; /* Deep blue */
          text-decoration: none; /* Optional: removes the underline */
          transition: color 0.3s ease; /* Smooth transition for hover effect */
          font-weight: 1000;
        }
        .conf:hover {
          color: #FFA500;
          font-weight: 900;
        }
        .journal {
          color: #BF0000; /* Deep blue */
          text-decoration: none; /* Optional: removes the underline */
          transition: color 0.3s ease; /* Smooth transition for hover effect */
          font-weight: 900;
        }
        .journal:hover {
          color: #FFA500; /* Lighter blue for hover state */
          font-weight: 900;
        }
        .section-title {
            color: #333;
            font-family: 'Open Sans', sans-serif;
            font-size: 24px;
            margin-top: 20px;
            margin-bottom: 2px;
            border-bottom: 2px solid #0066cc;
            display: inline-block;
        }
        .education, .work-experience, .publications, .projects, .teaching, .academic-services, .awards {
            margin-bottom: 20px;
            font-weight: 900;
        }
        .education li, .work-experience li, .publications li, .projects li, .teaching li, .academic-services li, .awards li {
            margin-bottom: 10px;
        }
        .institution, .position {
            font-weight: bold;
        }
        .date {
            float: right;
            color: #777;
        }
        .paper {
            color: black;
            font-weight: 900;
        }
        .venue {
            font-weight: 1000;
            color:red;
        }
        .award {
            font-weight: 1000;
            color:#FF8303;
        }
        .author {
            color: #777;
        }
        .details {
            font-size: 16px;
            color: #777;
        }
    </style>
</head>
<body>

<div class="title-container">
    <h1>Geon Lee @ KAIST</h1>
</div>
<div class="about-me">
    <img src="geonlee_picture.jpg" alt="Your Name" style="width:150px;height:auto;float:left;margin-right:20px;border-radius:10%;">
    <p>I am a Ph.D. student in the <a href="https://gsai.kaist.ac.kr/">Kim Jaechul Graduate School of AI</a> at <a href="https://www.kaist.ac.kr/">KAIST</a>, where I am advised by <a href="https://kijungs.github.io/">Prof. Kijung Shin</a> at <a href="https://sites.google.com/view/kaistdata">Data Mining Lab</a>. I received my B.S. in Computer Science and Engineering from <a href="https://www.skku.edu/skku/index.do">Sungkyunkwan University</a>. I worked at <a href="https://www.amazon.com/">Amazon</a> as an Applied Scientist Intern in 2022 and at <a href="https://www.nec-labs.com/">NEC Labs America</a> as a Research Intern in 2023. My research interests include data mining, machine learning, and social network analysis.</p>
  <p style="text-align:center">
    <a href="geonlee@0325@kaist.ac.kr" title="email">Email</a> |
    <a href="geonlee_cv.pdf" title="CV">CV</a> |
    <a href="https://www.linkedin.com/in/geon-lee-70322a161" title="LinkedIn">LinkedIn</a> |
    <a href="https://github.com/geon0325" title="GitHub">GitHub</a> |
    <a href="https://scholar.google.co.kr/citations?user=2g2psXcAAAAJ&hl=en" title="Google Scholar">Google Scholar</a>
</p>
</div>
<div style="clear:both;"></div>


<h2 class="section-title">Education</h2>
<ul class="education">
    <li><span class="institution">Korea Advanced Institute of Science and Technology (KAIST)</span> <span class="date">Sep. 2020 - Present</span><br>
        <span class="details">M.S. & Ph.D. in Artificial Intelligence</span>
    </li>
    <li><span class="institution">Sungkyunkwan University (SKKU)</span> <span class="date">Mar. 2016 - Aug. 2019</span><br>
        <span class="details">B.S. in Computer Science and Engineering</span>
    </li>
</ul>

<h2 class="section-title">Work Experience</h2>
<ul class="education">
    <li><span class="institution">NEC Labs America</span> <span class="date">May 2023 - Aug. 2023, Princeton</span><br>
        <span class="details">Research Intern</span>
    </li>
    <li><span class="institution">Amazon</span> <span class="date">Sep. 2022 - Dec. 2022, San Francisco</span><br>
        <span class="details">Applied Scientist Intern</span>
    </li>
</ul>

<!-- Add sections for Tutorials, Publications, Academic Services, Awards & Honors, Projects, Teaching as per the original format, following the new style guide -->
<h2 class="section-title">Tutorials</h2>
<ul class="publications">
    <li><span>Mining of Real-world Hypergraphs: Patterns, Tools, and Generators</span></br>
        <span class="author"><span style='color:black;text-decoration:underline'>Geon Lee</span>, Jaemin Yoo, and Kijung Shin</span></br>
      <a href="https://kdd.org/kdd2023/" class="conf">KDD 2023</a> & <a href="https://www2023.thewebconf.org/" class="conf">WWW 2023</a> & <a href="https://icdm22.cse.usf.edu/" class="conf">ICDM 2022</a> & <a href="https://www.cikm2022.org/" class="conf">CIKM 2022</a>&nbsp &nbsp
      [
      <a href="https://sites.google.com/view/hypergraph-tutorial">website</a>
      ]
    </li>
</ul>

<h2 class="section-title">Publications</h2>
<ul class="publications">
    <li class="paper-entry" style="margin-bottom: 15px;">
      <span class="paper">A Survey on Hypergraph Mining: Patterns, Tools, and Generators</span><br/>
      <span class="author"><span style='color:black;text-decoration:underline'>Geon Lee</span>*, Fanchen Bu*, Tina Eliassi-Rad, and Kijung Shin</span><br/>
      <a target="_blank" class="arxiv">arXiv (2024)</a>&nbsp &nbsp
      [ <a href="https://arxiv.org/pdf/2401.08878.pdf">pdf</a> ]
    </li>
    <li class="paper-entry" style="margin-bottom: 15px;">
      <span class="paper">VilLain: Self-Supervised Learning on Homogeneous Hypergraphs without Features via Virtual Label Propagation</span><br/>
      <span class="author"><span style='color:black;text-decoration:underline'>Geon Lee</span>, Soo Yong Lee, and Kijung Shin</span><br/>
      <a href="https://www2024.thewebconf.org/" target="_blank" class="conf">WWW 2024</a>&nbsp &nbsp
      [ pdf | code ]
    </li>
    <li style="margin-bottom: 15px;">
      <span class="paper">Random Walk with Restart on Hypergraphs: Fast Computation and an Application to Anomaly Detection</span></br>
      <span class="author">Jaewan Chun, <span style='color:black;text-decoration:underline'>Geon Lee</span>, Kijung Shin, and Jinhong Jung</span></br>
      <a href="https://www.springer.com/journal/10618" class="journal">Data Mining and Knowledge Discovery (2023)</a>&nbsp &nbsp
      [
      <a href="http://dmlab.kaist.ac.kr/~kijungs/papers/archerDAMI2024.pdf">pdf</a> |
      <a href="https://github.com/jaewan01/ARCHER">code</a>
      ]
    </li>
    <li style="margin-bottom: 15px;">
      <span class="paper">Hypergraph Motifs and Their Extensions Beyond Binary</span></br>
      <span class="author"><span style='color:black;text-decoration:underline'>Geon Lee</span>*, Seokbum Yoon*, Jihoon Ko, Hyunju Kim, and Kijung Shin</span></br>
      <a href="https://link.springer.com/journal/778" class="journal">The VLDB Journal (2023)</a>&nbsp &nbsp
      [
      <a href="https://arxiv.org/pdf/2310.15668.pdf">pdf</a> |
      <a href="https://www.vldb.org/pvldb/vol13/p2256-lee.pdf">shorter ver.</a> |
      <a href="https://github.com/jing9044/MoCHy-with-3h-motif">code</a>
      ]
    </li>
    <li style="margin-bottom: 15px;">
      <span class="paper">Hypercore Decomposition for Non-Fragile Hyperedges: Concepts, Algorithms, Observations, and Applications</span></br>
      <span class="author">Fanchen Bu, <span style='color:black;text-decoration:underline'>Geon Lee</span>, and Kijung Shin</span></br>
      <a href="https://www.springer.com/journal/10618" class="journal">Data Mining and Knowledge Discovery (2023)</a>&nbsp &nbsp
      [
      <a href="https://arxiv.org/pdf/2301.08440.pdf">pdf</a> |
      <a href="https://github.com/bokveizen/non-fragile-hypercore">code</a>
      ]
    </li>
    <li style="margin-bottom: 15px;">
      <span class="paper">Temporal Hypergraph Motifs</span></br>
      <span class="author"><span style='color:black;text-decoration:underline'>Geon Lee</span> and Kijung Shin</span></br>
      <a href="https://www.springer.com/journal/10115" class="journal">Knowledge and Information Systems (2023)</a>&nbsp &nbsp
      [
      <a href="http://dmlab.kaist.ac.kr/~kijungs/papers/thmotifKAIS2023.pdf">pdf</a> |
      <a href="https://arxiv.org/pdf/2109.08341.pdf">shorter ver.</a> |
      <a href="https://github.com/geonlee0325/THyMe">code</a>
      ]
    </li>
    <li class="paper-entry" style="margin-bottom: 15px;">
      <span class="paper">Set2Box: Similarity Preserving Representation Learning for Sets</span><br/>
      <span class="author"><span style='color:black;text-decoration:underline'>Geon Lee</span>, Chanyoung Park, and Kijung Shin</span><br/>
      <a href="https://icdm22.cse.usf.edu/" target="_blank" class="conf">ICDM 2022</a>&nbsp &nbsp
      [
      <a href="http://dmlab.kaist.ac.kr/~kijungs/papers/set2boxICDM2022.pdf">pdf</a> |
      <a href="https://arxiv.org/pdf/2210.03282.pdf">longer ver.</a> |
      <a href="https://github.com/geon0325/Set2Box">code</a>
      ]
    </li>
    <li class="paper-entry" style="margin-bottom: 15px;">
      <span class="paper">HashNWalk: Hash and Random Walk Based Anomaly Detection in Hyperedge Streams</span><br/>
      <span class="author"><span style='color:black;text-decoration:underline'>Geon Lee</span>, Minyoung Choe, and Kijung Shin</span><br/>
      <a href="https://ijcai-22.org/" target="_blank" class="conf">IJCAI 2022</a>&nbsp &nbsp
      [
      <a href="https://www.ijcai.org/proceedings/2022/0296.pdf">pdf</a> |
      <a href="https://github.com/geonlee0325/HashNWalk/blob/main/online_appendix.pdf">appendix</a> |
      <a href="https://github.com/geonlee0325/HashNWalk">code</a>
      ]
    </li>
    <li class="paper-entry" style="margin-bottom: 15px;">
      <span class="paper">MiDaS: Representative Sampling from Real-World Hypergraphs</span><br/>
      <span class="author">Minyoung Choe, Jaemin Yoo, <span style='color:black;text-decoration:underline'>Geon Lee</span>, Woonsung Baek, U Kang, and Kijung Shin</span><br/>
      <a href="https://www2022.thewebconf.org/" target="_blank" class="conf">WWW 2022</a>&nbsp &nbsp
      [
      <a href="https://arxiv.org/pdf/2202.01587.pdf">pdf</a> |
      <a href="https://github.com/young917/MiDaS/blob/main/MiDaS_ONLINE_APPENDIX.pdf">appendix</a> |
      <a href="https://github.com/young917/MiDaS">code</a>
      ]
    </li>
    <li class="paper-entry" style="margin-bottom: 15px;">
      <span class="paper">Simple Epidemic Models with Segmentation Can Be Better than Complex Ones</span><br/>
      <span class="author">Minyoung Choe, Jaemin Yoo, <span style='color:black;text-decoration:underline'>Geon Lee</span>, Woonsung Baek, U Kang, and Kijung Shin</span><br/>
      <a href="https://journals.plos.org/plosone/" target="_blank" class="journal">PLOS ONE (2022)</a>&nbsp &nbsp
      [
      <a href="https://journals.plos.org/plosone/article/file?id=10.1371/journal.pone.0262244&type=printable">pdf</a> |
      <a href="https://github.com/geonlee0325/covid_segmentation">code</a>
      ]</br>
      <span class="award">Oral presentation at epiDAMIK workshop in KDD 2021</span>
    </li>
    <li class="paper-entry" style="margin-bottom: 15px;">
      <span class="paper">THyMe+: Temporal Hypergraph Motifs and Fast Algorithms for Exact Counting</span><br/>
      <span class="author"><span style='color:black;text-decoration:underline'>Geon Lee</span> and Kijung Shin</span><br/>
      <a href="https://icdm2021.auckland.ac.nz/" target="_blank" class="conf">ICDM 2021</a>&nbsp &nbsp
      [
      <a href="https://arxiv.org/pdf/2109.08341.pdf">pdf</a> |
      <a href="https://github.com/geonlee0325/THyMe">code</a>
      ]</br>
      <span class="award">Selected as one of the best-ranked papers of ICDM 2021</span>
    </li>
    <li class="paper-entry" style="margin-bottom: 15px;">
      <span class="paper">How Do Hyperedges Overlap in Real-World Hypergraphs? - Patterns, Measures, and Generators</span><br/>
      <span class="author"><span style='color:black;text-decoration:underline'>Geon Lee</span>*, Minyoung Choe*, and Kijung Shin</span><br/>
      <a href="https://www2021.thewebconf.org/" target="_blank" class="conf">WWW 2021</a>&nbsp &nbsp
      [
      <a href="https://arxiv.org/pdf/2101.07480.pdf">pdf</a> |
      <a href="https://github.com/young917/www21-hyperlap/blob/master/online_appendix.pdf">appendix</a> |
      <a href="https://github.com/young917/www21-hyperlap">code</a>
      ]
    </li>
    <li class="paper-entry" style="margin-bottom: 15px;">
      <span class="paper">Hypergraph Motifs: Concepts, Algorithms, and Discoveries</span><br/>
      <span class="author"><span style='color:black;text-decoration:underline'>Geon Lee</span>, Jihoon Ko, and Kijung Shin</span><br/>
      <a href="https://vldb2020.org/" target="_blank" class="conf">VLDB 2020</a>&nbsp &nbsp
      [
      <a href="http://www.vldb.org/pvldb/vol13/p2256-lee.pdf">pdf</a> |
      <a href="https://github.com/geonlee0325/MoCHy/blob/master/supplementary.pdf">appendix</a> |
      <a href="https://github.com/lg970325/MoCHy">code</a>
      ]
    </li>
    <li class="paper-entry" style="margin-bottom: 15px;">
      <span class="paper">MEGA: Multi-View Semi-Supervised Clustering of Hypergraphs</span><br/>
      <span class="author">Joyce Jiyoung Whang, Rundong Du, Sangwon Jung, <span style='color:black;text-decoration:underline'>Geon Lee</span>, Barry Drake, Qingqing Liu, Seonggoo Kang, and Haesun Park</span><br/>
      <a href="https://vldb2020.org/" target="_blank" class="conf">VLDB 2020</a>&nbsp &nbsp
      [
      <a href="http://www.vldb.org/pvldb/vol13/p698-whang.pdf">pdf</a>
      ]
    </li>
    <li class="paper-entry" style="margin-bottom: 15px;">
      <span class="paper">Hyperlink Classification via Structured Graph Embedding</span><br/>
      <span class="author"><span style='color:black;text-decoration:underline'>Geon Lee</span>, Seonggoo Kang, and Joyce Jiyoung Whang</span><br/>
      <a href="https://sigir.org/sigir2019/" target="_blank" class="conf">SIGIR 2019</a>&nbsp &nbsp
      [
      <a href="https://geonlee0325.github.io/files/hyperlink_sigir2019_paper.pdf">pdf</a>
      ]
    </li>
</ul>

<h2 class="section-title">Academic Services</h2>
<ul class="academic-services">
    <li>Program Committee</br>
      <a href="https://www.siam.org/conferences/cm/conference/sdm24" class="conf">SDM 2024</a> |
      <a href="https://aaai.org/aaai-conference/" class="conf">AAAI 2024</a> |
      <a href="https://logconference.org/" class="conf">LoG 2022 - 2023</a> |
      <a href="https://uobevents.eventsair.com/cikm2023/" class="conf">CIKM 2023 (Tutorial Track)</a>
    </li>
    <li>Conference Reviewer</br>
      <a href="https://www2024.thewebconf.org/" class="conf">WWW 2024</a> |
      <a href="https://kdd2024.kdd.org/" class="conf">KDD 2023 - 2024</a>
    </li>
    <li>Journal Reviewer</br>
      <a href="https://www.sciencedirect.com/journal/big-data-research" class="journal">Big Data Research (2024)</a> |
      <a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=69" class="journal">TKDE (2023)</a> |
      <a href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=5962385" class="journal">TNNLS (2023)</a> |
      <a href="https://www.springer.com/journal/778" class="journal">The VLDB Journal (2023)</a>
    </li>
</ul>

<h2 class="section-title">Awards & Honors</h2>
<ul class="awards">
    <li>Selected as One of the Best-Ranked Papers of ICDM 2021 <span class="date">Dec. 2021</span></li>
    <li>Sungkyunkwan Presidential Award <span class="date">Aug. 2019</span> </li>
    <li>Dean's List <span class="date">2016 - 2019</span></li>
    <li>Sungkyun Software Scholarship (Full tuition for all semesters) <span class="date">2016 - 2019</span></li>
</ul>

<h2 class="section-title">Projects</h2>
<ul class="projects">
    <li>AI-based Weather Forecast Support Development <span class="date">July 2021 - Present</span> </li>
    <li>COVID-19 Task Force <span class="date">Mar. 2020 - Sep. 2020</span> </li>
</ul>


<h2 class="section-title">Teaching</h2>
<ul class="teaching">
    <li>KAIST AI506 Data Mining and Search <span class="date"><a href="https://sites.google.com/view/ai506/home">Spring 2023</a>, <a href="https://sites.google.com/view/ai506-2021spring/home">Spring 2021</a></span></li>
    <li>KAIST AI607 Graph Mining and Social Network Analysis <span class="date"><a href="https://sites.google.com/view/ai607/home">Fall 2023</a>, <a href="https://sites.google.com/view/ai607-2022fall/home">Fall 2022</a>, <a href="https://sites.google.com/view/ai607-2021fall/home">Fall 2021</a>, <a href="https://sites.google.com/view/ai607-2020fall/home">Fall 2020</a></span></li>
    <li>KAIST AI617 Machine Learning for Robotics <span class="date">Spring 2022</span></li>
    <li>SKKU CSE3036 Seminar in Computer Engineering <span class="date">Fall 2019</span></li>
</ul>

</body>
</html>

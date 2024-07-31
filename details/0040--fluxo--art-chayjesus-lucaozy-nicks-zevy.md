### Roster Details<br />
Team Name: Fluxo<br />
Roster: arT, chayJESUS, Lucaozy, nicks, zevy<br />
Global Rank: [40](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [10]( ../standings_americas.md)<br />
<br />
Final Rank Value:  1131.9<br />
<br />
Final Rank Value (1131.9) = Starting Rank Value (1039.8) + Head To Head Adjustments (92.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.523[<sup>1</sup>](#table2)
- Bounty Collected: 0.446[<sup>2</sup>](#table1)
- Opponent Network: 0.270[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.310<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1039.8
- 400 + ( ( 0.310 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1039.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|          100 |       45 | 2024-07-30 | Bounty Hunters | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.38 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           99 |       86 | 2024-07-29 | Vikings KR     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.43 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           98 |      118 | 2024-07-28 | Intense        | L   | 1.000      | -            | -                | -                | -         |   -28.65 | arT, Lucaozy, nicks, vsm, zevy       |
|           97 |      160 | 2024-07-26 | Imperial       | L   | 1.000      | -            | -                | -                | -         |   -13.41 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           96 |      164 | 2024-07-26 | W7M            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.71 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           95 |      168 | 2024-07-26 | Solid          | L   | 1.000      | -            | -                | -                | -         |   -24.51 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           94 |      191 | 2024-07-25 | Hype           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.17 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           93 |      197 | 2024-07-25 | Imperium Nexus | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.40 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           92 |      232 | 2024-07-24 | RED Canids     | L   | 1.000      | -            | -                | -                | -         |   -15.34 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           91 |      237 | 2024-07-24 | Solid          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.33 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           90 |      268 | 2024-07-23 | BESTIA         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.86 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           89 |      276 | 2024-07-23 | Dusty Roots    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.31 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           88 |      277 | 2024-07-23 | Case           | L   | 1.000      | -            | -                | -                | -         |   -25.70 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           87 |      283 | 2024-07-23 | Solid          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.96 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           86 |      307 | 2024-07-22 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |   -24.11 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           85 |      327 | 2024-07-21 | paiN           | W   | 1.000      | 0.384        | 0.305 (0.117)    | 0.796 (0.306)    | 0 (0.000) |    22.76 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           84 |      336 | 2024-07-21 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -8.25 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           83 |      355 | 2024-07-20 | Sharks         | W   | 1.000      | 0.384        | -                | 0.558 (0.215)    | -         |     7.58 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           82 |      369 | 2024-07-20 | ODDIK          | W   | 1.000      | -            | -                | -                | -         |     9.28 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           81 |      392 | 2024-07-19 | Vikings KR     | W   | 1.000      | -            | -                | -                | -         |     4.05 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           80 |      396 | 2024-07-19 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -8.53 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           79 |      404 | 2024-07-19 | Case           | W   | 1.000      | -            | -                | -                | -         |     5.56 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           78 |      434 | 2024-07-18 | Sharks         | W   | 1.000      | 0.450        | -                | 0.558 (0.251)    | -         |     8.03 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           77 |      438 | 2024-07-18 | Sharks         | W   | 1.000      | 0.450        | -                | 0.558 (0.251)    | -         |     8.60 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           76 |      446 | 2024-07-18 | Galorys        | W   | 1.000      | -            | -                | -                | -         |     3.67 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           75 |      502 | 2024-07-17 | BESTIA         | W   | 1.000      | 0.450        | 0.093 (0.042)    | 0.731 (0.329)    | -         |     8.84 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           74 |      508 | 2024-07-17 | BESTIA         | W   | 1.000      | 0.450        | 0.093 (0.042)    | 0.731 (0.329)    | -         |     9.51 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           73 |      613 | 2024-07-15 | Dusty Roots    | W   | 1.000      | -            | -                | -                | -         |     3.54 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           72 |      618 | 2024-07-15 | Dusty Roots    | W   | 1.000      | -            | -                | -                | -         |     3.66 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           71 |      842 | 2024-06-16 | paiN           | W   | 0.900      | 0.450        | 0.305 (0.124)    | 0.796 (0.323)    | -         |    22.19 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           70 |      871 | 2024-06-15 | inSanitY       | W   | 0.893      | -            | -                | -                | -         |     9.21 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           69 |      905 | 2024-06-14 | Sharks         | W   | 0.887      | 0.450        | -                | 0.558 (0.223)    | -         |    12.00 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           68 |     1117 | 2024-06-08 | KRÜ            | W   | 0.848      | -            | -                | -                | -         |     6.33 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           67 |     1195 | 2024-06-07 | Bounty Hunters | W   | 0.839      | -            | -                | -                | -         |     6.80 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           66 |     1258 | 2024-06-06 | W7M            | W   | 0.833      | -            | -                | -                | -         |     4.30 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           65 |     1302 | 2024-06-05 | paiN           | L   | 0.828      | -            | -                | -                | -         |    -4.37 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           64 |     1352 | 2024-06-04 | 9z             | L   | 0.821      | -            | -                | -                | -         |    -2.40 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           63 |     1679 | 2024-05-22 | BESTIA         | L   | 0.733      | -            | -                | -                | -         |   -12.69 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           62 |     1680 | 2024-05-22 | BESTIA         | L   | 0.733      | -            | -                | -                | -         |   -13.53 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           61 |     1750 | 2024-05-20 | RED Canids     | W   | 0.721      | 0.450        | 0.079 (0.026)    | 0.738 (0.239)    | -         |    13.37 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           60 |     1752 | 2024-05-20 | RED Canids     | L   | 0.721      | -            | -                | -                | -         |    -9.41 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           59 |     1810 | 2024-05-18 | 9z             | L   | 0.706      | -            | -                | -                | -         |    -2.19 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           58 |     1844 | 2024-05-17 | Case           | W   | 0.700      | -            | -                | -                | -         |     5.69 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           57 |     1877 | 2024-05-16 | RED Canids     | L   | 0.694      | -            | -                | -                | -         |   -10.35 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           56 |     1923 | 2024-05-15 | Smoke          | W   | 0.687      | -            | -                | -                | -         |     2.16 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           55 |     1925 | 2024-05-15 | Smoke          | W   | 0.687      | -            | -                | -                | -         |     2.21 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           54 |     1939 | 2024-05-15 | Imperial       | L   | 0.686      | -            | -                | -                | -         |    -5.50 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           53 |     1988 | 2024-05-14 | Sharks         | W   | 0.680      | -            | -                | -                | -         |     7.46 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           52 |     2001 | 2024-05-14 | ODDIK          | W   | 0.679      | 0.384        | 0.096 (0.025)    | -                | -         |     7.30 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           51 |     2019 | 2024-05-13 | Hype           | W   | 0.673      | -            | -                | -                | -         |     4.75 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           50 |     2048 | 2024-05-12 | Vikings KR     | W   | 0.666      | -            | -                | -                | -         |     3.90 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           49 |     2108 | 2024-05-09 | paiN           | W   | 0.648      | 0.450        | 0.305 (0.089)    | 0.796 (0.232)    | -         |    17.55 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           48 |     2114 | 2024-05-09 | paiN           | L   | 0.648      | -            | -                | -                | -         |    -2.76 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           47 |     2586 | 2024-04-18 | paiN           | L   | 0.509      | -            | -                | -                | -         |    -2.13 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           46 |     2591 | 2024-04-18 | Imperial       | L   | 0.507      | -            | -                | -                | -         |    -3.40 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           45 |     2638 | 2024-04-17 | ODDIK          | W   | 0.501      | -            | -                | -                | -         |     5.46 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           44 |     2648 | 2024-04-17 | Solid          | W   | 0.500      | -            | -                | -                | -         |     4.06 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           43 |     2678 | 2024-04-16 | Hype           | W   | 0.494      | -            | -                | -                | -         |     3.99 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           42 |     2738 | 2024-04-13 | Galorys        | L   | 0.472      | -            | -                | -                | -         |   -10.69 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           41 |     2803 | 2024-04-10 | Imperial       | W   | 0.454      | 0.450        | 0.245 (0.050)    | -                | -         |    11.43 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           40 |     2807 | 2024-04-10 | Imperial       | L   | 0.454      | -            | -                | -                | -         |    -2.86 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           39 |     2857 | 2024-04-09 | ODDIK          | W   | 0.447      | -            | -                | -                | -         |     5.05 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           38 |     2862 | 2024-04-09 | ODDIK          | W   | 0.447      | -            | -                | -                | -         |     5.24 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           37 |     2898 | 2024-04-08 | ODDIK          | W   | 0.440      | -            | -                | -                | -         |     5.35 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           36 |     2947 | 2024-04-06 | BESTIA         | L   | 0.428      | -            | -                | -                | -         |    -8.10 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           35 |     2949 | 2024-04-06 | Solid          | W   | 0.427      | -            | -                | -                | -         |     3.81 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           34 |     2964 | 2024-04-05 | MIBR           | L   | 0.421      | -            | -                | -                | -         |    -1.61 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           33 |     2965 | 2024-04-05 | MIBR           | W   | 0.421      | 0.450        | 0.202 (0.038)    | -                | -         |    11.79 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           32 |     2992 | 2024-04-04 | Corinthians    | W   | 0.414      | -            | -                | -                | -         |     0.62 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           31 |     2998 | 2024-04-04 | Corinthians    | W   | 0.414      | -            | -                | -                | -         |     0.62 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           30 |     3010 | 2024-04-04 | RED Canids     | L   | 0.413      | -            | -                | -                | -         |    -5.49 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           29 |     3026 | 2024-04-03 | MIBR           | L   | 0.408      | -            | -                | -                | -         |    -1.45 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           28 |     3039 | 2024-04-03 | BESTIA         | W   | 0.407      | -            | -                | -                | -         |     5.55 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           27 |     3076 | 2024-04-02 | MIBR           | L   | 0.401      | -            | -                | -                | -         |    -1.41 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           26 |     3080 | 2024-04-02 | BESTIA         | W   | 0.400      | -            | -                | -                | -         |     5.59 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           25 |     3164 | 2024-03-27 | Galorys        | L   | 0.361      | -            | -                | -                | -         |    -8.05 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           24 |     3170 | 2024-03-27 | Galorys        | W   | 0.361      | -            | -                | -                | -         |     3.36 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           23 |     3445 | 2024-03-13 | Intense        | W   | 0.267      | -            | -                | -                | -         |     0.66 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           22 |     3451 | 2024-03-13 | Solid          | L   | 0.266      | -            | -                | -                | -         |    -5.99 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           21 |     3478 | 2024-03-12 | MIBR           | W   | 0.260      | 0.435        | 0.202 (0.023)    | -                | -         |     7.30 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           20 |     3508 | 2024-03-11 | Sharks         | W   | 0.252      | -            | -                | -                | -         |     3.19 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           19 |     3552 | 2024-03-09 | Corinthians    | W   | 0.239      | -            | -                | -                | -         |     0.36 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           18 |     3588 | 2024-03-07 | Case           | L   | 0.227      | -            | -                | -                | -         |    -4.74 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           17 |     3613 | 2024-03-06 | Solid          | L   | 0.221      | -            | -                | -                | -         |    -4.94 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           16 |     3615 | 2024-03-06 | Solid          | W   | 0.221      | -            | -                | -                | -         |     2.04 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           15 |     3680 | 2024-03-04 | Case           | W   | 0.208      | -            | -                | -                | -         |     2.31 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           14 |     3681 | 2024-03-04 | Case           | W   | 0.207      | -            | -                | -                | -         |     2.35 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           13 |     3838 | 2024-02-25 | Imperial       | W   | 0.154      | -            | -                | -                | -         |     3.88 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           12 |     3868 | 2024-02-24 | Sharks         | W   | 0.147      | -            | -                | -                | -         |     1.86 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           11 |     3919 | 2024-02-21 | W7M            | L   | 0.128      | -            | -                | -                | -         |    -3.05 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           10 |     3923 | 2024-02-21 | W7M            | W   | 0.128      | -            | -                | -                | -         |     0.98 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            9 |     3930 | 2024-02-21 | Solid          | W   | 0.126      | -            | -                | -                | -         |     1.24 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            8 |     3955 | 2024-02-20 | Solid          | L   | 0.120      | -            | -                | -                | -         |    -2.63 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            7 |     4051 | 2024-02-16 | 9z             | W   | 0.093      | -            | -                | -                | -         |     2.80 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            6 |     4078 | 2024-02-15 | Imperial       | L   | 0.087      | -            | -                | -                | -         |    -0.54 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            5 |     4081 | 2024-02-15 | W7M            | W   | 0.087      | -            | -                | -                | -         |     0.68 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            4 |     4085 | 2024-02-15 | Sharks         | W   | 0.086      | -            | -                | -                | -         |     1.09 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            3 |     4088 | 2024-02-15 | Sharks         | W   | 0.086      | -            | -                | -                | -         |     1.10 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            2 |     4109 | 2024-02-14 | Intense        | W   | 0.081      | -            | -                | -                | -         |     0.21 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            1 |     4174 | 2024-02-12 | Flamengo       | W   | 0.065      | -            | -                | -                | -         |     0.09 | chayJESUS, Lucaozy, PKL, vsm, zevy   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($40,352.64)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-22 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-16 |      0.900 | $30,000.00     | $27,008.80      |
| 2024-06-09 |      0.854 | $2,000.00      | $1,707.87       |
| 2024-05-19 |      0.714 | $2,000.00      | $1,427.86       |
| 2024-03-14 |      0.274 | $5,000.00      | $1,369.03       |
| 2024-02-25 |      0.154 | $25,000.00     | $3,839.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: Fluxo<br />
Roster: arT, chayJESUS, Lucaozy, nicks, zevy<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [30](../standings_global.md)<br />
Regional Rank: [9]( ../standings_americas.md)<br />
Final Rank Value:  1201.5<br />
<br />
Final Rank Value (1201.5) = Starting Rank Value (1062.1) + Head To Head Adjustments (139.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.554[<sup>1</sup>](#table2)
- Bounty Collected: 0.473[<sup>2</sup>](#table1)
- Opponent Network: 0.281[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.327<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1062.1
- 400 + ( ( 0.327 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1062.1


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
|           90 |       26 | 2024-07-23 | BESTIA         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.65 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           89 |       34 | 2024-07-23 | Dusty Roots    | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.74 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           88 |       35 | 2024-07-23 | Case           | L   | 1.000      | -            | -                | -                | -         |   -26.17 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           87 |       41 | 2024-07-23 | Solid          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.60 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           86 |       65 | 2024-07-22 | BESTIA         | L   | 1.000      | -            | -                | -                | -         |   -24.34 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           85 |       85 | 2024-07-21 | paiN           | W   | 1.000      | 0.384        | 0.393 (0.151)    | 0.825 (0.317)    | 0 (0.000) |    23.09 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           84 |       94 | 2024-07-21 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -7.91 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           83 |      113 | 2024-07-20 | Sharks         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.30 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           82 |      127 | 2024-07-20 | ODDIK          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.86 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           81 |      150 | 2024-07-19 | Vikings KR     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.71 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           80 |      154 | 2024-07-19 | paiN           | L   | 1.000      | -            | -                | -                | -         |    -8.19 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           79 |      162 | 2024-07-19 | Case           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.08 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           78 |      192 | 2024-07-18 | Sharks         | W   | 1.000      | 0.450        | -                | 0.538 (0.242)    | 0 (0.000) |     7.69 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           77 |      196 | 2024-07-18 | Sharks         | W   | 1.000      | 0.450        | -                | 0.538 (0.242)    | 0 (0.000) |     8.22 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           76 |      204 | 2024-07-18 | Galorys        | W   | 1.000      | 0.384        | -                | 0.592 (0.228)    | -         |     3.19 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           75 |      260 | 2024-07-17 | BESTIA         | W   | 1.000      | 0.450        | 0.114 (0.051)    | 0.740 (0.333)    | -         |     8.50 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           74 |      266 | 2024-07-17 | BESTIA         | W   | 1.000      | 0.450        | 0.114 (0.051)    | 0.740 (0.333)    | -         |     9.13 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           73 |      371 | 2024-07-15 | Dusty Roots    | W   | 1.000      | -            | -                | -                | -         |     2.75 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           72 |      376 | 2024-07-15 | Dusty Roots    | W   | 1.000      | -            | -                | -                | -         |     2.83 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           71 |      600 | 2024-06-16 | paiN           | W   | 0.948      | 0.450        | 0.393 (0.168)    | 0.825 (0.352)    | -         |    23.62 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           70 |      629 | 2024-06-15 | inSanitY       | W   | 0.941      | -            | -                | -                | -         |     9.24 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           69 |      663 | 2024-06-14 | Sharks         | W   | 0.935      | 0.450        | -                | 0.538 (0.226)    | -         |    12.30 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           68 |      875 | 2024-06-08 | KRÜ            | W   | 0.895      | -            | -                | -                | -         |     6.00 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           67 |      953 | 2024-06-07 | Bounty Hunters | W   | 0.887      | -            | -                | -                | -         |     6.63 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           66 |     1016 | 2024-06-06 | W7M            | W   | 0.880      | -            | -                | -                | -         |     4.15 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           65 |     1060 | 2024-06-05 | paiN           | L   | 0.875      | -            | -                | -                | -         |    -4.30 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           64 |     1110 | 2024-06-04 | 9z             | L   | 0.869      | -            | -                | -                | -         |    -2.28 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           63 |     1437 | 2024-05-22 | BESTIA         | L   | 0.781      | -            | -                | -                | -         |   -13.74 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           62 |     1438 | 2024-05-22 | BESTIA         | L   | 0.780      | -            | -                | -                | -         |   -14.70 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           61 |     1508 | 2024-05-20 | RED Canids     | W   | 0.768      | 0.450        | 0.102 (0.035)    | 0.793 (0.274)    | -         |    14.32 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           60 |     1510 | 2024-05-20 | RED Canids     | L   | 0.768      | -            | -                | -                | -         |    -9.91 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           59 |     1568 | 2024-05-18 | 9z             | L   | 0.754      | -            | -                | -                | -         |    -2.07 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           58 |     1602 | 2024-05-17 | Case           | W   | 0.748      | -            | -                | -                | -         |     5.40 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           57 |     1635 | 2024-05-16 | RED Canids     | L   | 0.741      | -            | -                | -                | -         |   -11.03 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           56 |     1681 | 2024-05-15 | Smoke          | W   | 0.735      | -            | -                | -                | -         |     2.05 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           55 |     1683 | 2024-05-15 | Smoke          | W   | 0.734      | -            | -                | -                | -         |     2.09 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           54 |     1697 | 2024-05-15 | Imperial       | L   | 0.733      | -            | -                | -                | -         |    -5.27 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           53 |     1746 | 2024-05-14 | Sharks         | W   | 0.728      | -            | -                | -                | -         |     7.52 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           52 |     1759 | 2024-05-14 | ODDIK          | W   | 0.726      | -            | -                | -                | -         |     7.21 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           51 |     1777 | 2024-05-13 | Hype           | W   | 0.720      | -            | -                | -                | -         |     4.60 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           50 |     1806 | 2024-05-12 | Vikings KR     | W   | 0.713      | -            | -                | -                | -         |     3.78 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           49 |     1866 | 2024-05-09 | paiN           | W   | 0.695      | 0.450        | 0.393 (0.123)    | 0.825 (0.258)    | -         |    19.11 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           48 |     1872 | 2024-05-09 | paiN           | L   | 0.695      | -            | -                | -                | -         |    -2.66 | arT, chayJESUS, Lucaozy, nicks, zevy |
|           47 |     2344 | 2024-04-18 | paiN           | L   | 0.556      | -            | -                | -                | -         |    -2.05 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           46 |     2349 | 2024-04-18 | Imperial       | L   | 0.555      | -            | -                | -                | -         |    -3.16 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           45 |     2396 | 2024-04-17 | ODDIK          | W   | 0.549      | -            | -                | -                | -         |     5.51 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           44 |     2406 | 2024-04-17 | Solid          | W   | 0.547      | -            | -                | -                | -         |     4.20 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           43 |     2436 | 2024-04-16 | Hype           | W   | 0.542      | -            | -                | -                | -         |     4.01 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           42 |     2496 | 2024-04-13 | Galorys        | L   | 0.519      | -            | -                | -                | -         |   -12.51 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           41 |     2561 | 2024-04-10 | Imperial       | W   | 0.501      | 0.450        | 0.317 (0.072)    | -                | -         |    13.13 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           40 |     2565 | 2024-04-10 | Imperial       | L   | 0.501      | -            | -                | -                | -         |    -2.63 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           39 |     2615 | 2024-04-09 | ODDIK          | W   | 0.495      | -            | -                | -                | -         |     5.13 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           38 |     2620 | 2024-04-09 | ODDIK          | W   | 0.494      | -            | -                | -                | -         |     5.34 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           37 |     2656 | 2024-04-08 | ODDIK          | W   | 0.487      | -            | -                | -                | -         |     5.47 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           36 |     2705 | 2024-04-06 | BESTIA         | L   | 0.475      | -            | -                | -                | -         |    -9.26 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           35 |     2707 | 2024-04-06 | Solid          | W   | 0.474      | -            | -                | -                | -         |     4.00 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           34 |     2722 | 2024-04-05 | MIBR           | L   | 0.468      | -            | -                | -                | -         |    -1.77 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           33 |     2723 | 2024-04-05 | MIBR           | W   | 0.468      | 0.450        | 0.257 (0.054)    | -                | -         |    13.14 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           32 |     2750 | 2024-04-04 | Corinthians    | W   | 0.461      | -            | -                | -                | -         |     0.60 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           31 |     2756 | 2024-04-04 | Corinthians    | W   | 0.461      | -            | -                | -                | -         |     0.61 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           30 |     2768 | 2024-04-04 | RED Canids     | L   | 0.460      | -            | -                | -                | -         |    -6.04 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           29 |     2784 | 2024-04-03 | MIBR           | L   | 0.455      | -            | -                | -                | -         |    -1.59 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           28 |     2797 | 2024-04-03 | BESTIA         | W   | 0.454      | -            | -                | -                | -         |     5.96 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           27 |     2834 | 2024-04-02 | MIBR           | L   | 0.448      | -            | -                | -                | -         |    -1.54 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           26 |     2838 | 2024-04-02 | BESTIA         | W   | 0.447      | -            | -                | -                | -         |     6.02 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           25 |     2922 | 2024-03-27 | Galorys        | L   | 0.408      | -            | -                | -                | -         |    -9.78 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           24 |     2928 | 2024-03-27 | Galorys        | W   | 0.408      | -            | -                | -                | -         |     3.10 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           23 |     3203 | 2024-03-13 | Intense        | W   | 0.314      | -            | -                | -                | -         |     0.63 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           22 |     3209 | 2024-03-13 | Solid          | L   | 0.313      | -            | -                | -                | -         |    -7.24 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           21 |     3236 | 2024-03-12 | MIBR           | W   | 0.308      | 0.435        | 0.257 (0.034)    | -                | -         |     8.64 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           20 |     3266 | 2024-03-11 | Sharks         | W   | 0.300      | -            | -                | -                | -         |     3.56 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           19 |     3310 | 2024-03-09 | Corinthians    | W   | 0.286      | -            | -                | -                | -         |     0.38 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           18 |     3346 | 2024-03-07 | Case           | L   | 0.274      | -            | -                | -                | -         |    -6.08 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           17 |     3371 | 2024-03-06 | Solid          | L   | 0.268      | -            | -                | -                | -         |    -6.16 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           16 |     3373 | 2024-03-06 | Solid          | W   | 0.268      | -            | -                | -                | -         |     2.31 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           15 |     3438 | 2024-03-04 | Case           | W   | 0.255      | -            | -                | -                | -         |     2.51 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           14 |     3439 | 2024-03-04 | Case           | W   | 0.255      | -            | -                | -                | -         |     2.56 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           13 |     3596 | 2024-02-25 | Imperial       | W   | 0.201      | -            | -                | -                | -         |     5.30 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           12 |     3626 | 2024-02-24 | Sharks         | W   | 0.194      | -            | -                | -                | -         |     2.30 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           11 |     3677 | 2024-02-21 | W7M            | L   | 0.175      | -            | -                | -                | -         |    -4.29 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|           10 |     3681 | 2024-02-21 | W7M            | W   | 0.175      | -            | -                | -                | -         |     1.24 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            9 |     3688 | 2024-02-21 | Solid          | W   | 0.173      | -            | -                | -                | -         |     1.61 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            8 |     3713 | 2024-02-20 | Solid          | L   | 0.168      | -            | -                | -                | -         |    -3.76 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            7 |     3809 | 2024-02-16 | 9z             | W   | 0.141      | 0.435        | 0.511 (0.031)    | -                | -         |     4.25 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            6 |     3836 | 2024-02-15 | Imperial       | L   | 0.135      | -            | -                | -                | -         |    -0.68 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            5 |     3839 | 2024-02-15 | W7M            | W   | 0.134      | -            | -                | -                | -         |     0.98 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            4 |     3843 | 2024-02-15 | Sharks         | W   | 0.133      | -            | -                | -                | -         |     1.60 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            3 |     3846 | 2024-02-15 | Sharks         | W   | 0.133      | -            | -                | -                | -         |     1.61 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            2 |     3867 | 2024-02-14 | Intense        | W   | 0.128      | -            | -                | -                | -         |     0.27 | chayJESUS, Lucaozy, PKL, vsm, zevy   |
|            1 |     3932 | 2024-02-12 | Flamengo       | W   | 0.112      | -            | -                | -                | -         |     0.15 | chayJESUS, Lucaozy, PKL, vsm, zevy   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($43,379.05)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-22 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-16 |      0.948 | $30,000.00     | $28,427.43      |
| 2024-06-09 |      0.901 | $2,000.00      | $1,802.45       |
| 2024-05-19 |      0.761 | $2,000.00      | $1,522.44       |
| 2024-03-14 |      0.321 | $5,000.00      | $1,605.46       |
| 2024-02-25 |      0.201 | $25,000.00     | $5,021.28       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

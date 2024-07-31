### Roster Details<br />
Team Name: TSM Shimmer<br />
Roster: empathy, Juli, Lx, madss, phoebe<br />
Global Rank: [155](../standings_global.md)<br />
<br />
Region: [Americas]( ../standings_americas.md)<br />
Regional Rank: [43]( ../standings_americas.md)<br />
<br />
Final Rank Value:  696.6<br />
<br />
Final Rank Value (696.6) = Starting Rank Value (716.9) + Head To Head Adjustments (-20.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.373[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 716.9
- 400 + ( ( 0.154 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 716.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      109 | 2024-07-28 | Nouns fe         | W   | 1.000      | 0.250        | 0.004 (0.001)    | 0.037 (0.009)    | 0 (0.000) |    12.60 | empathy, Juli, Lx, madss, phoebe   |
|           23 |      838 | 2024-06-16 | Lotus fe         | W   | 0.901      | 0.250        | 0.005 (0.001)    | 0.038 (0.009)    | 0 (0.000) |    12.57 | abby, empathy, Juli, Lx, madss     |
|           22 |     1067 | 2024-06-09 | Perseverance     | L   | 0.853      | -            | -                | -                | -         |   -18.84 | abby, empathy, Florence, Lx, madss |
|           21 |     1167 | 2024-06-07 | Zomblers         | L   | 0.842      | -            | -                | -                | -         |   -19.55 | abby, empathy, Florence, Lx, madss |
|           20 |     1314 | 2024-06-05 | Asian Kings      | W   | 0.826      | -            | -                | -                | 0 (0.000) |     3.81 | abby, empathy, Florence, Lx, madss |
|           19 |     1357 | 2024-06-04 | Nouns            | L   | 0.820      | -            | -                | -                | -         |    -4.66 | abby, empathy, Florence, Lx, madss |
|           18 |     1361 | 2024-06-04 | Homyno           | L   | 0.820      | -            | -                | -                | -         |   -13.14 | abby, empathy, Florence, Lx, madss |
|           17 |     1466 | 2024-05-31 | NAVI Javelins    | L   | 0.795      | -            | -                | -                | -         |    -7.71 | abby, empathy, Lx, madss, phoebe   |
|           16 |     1473 | 2024-05-31 | panelinha        | L   | 0.793      | -            | -                | -                | -         |    -7.87 | abby, empathy, Lx, madss, phoebe   |
|           15 |     1586 | 2024-05-26 | FlyQuest RED     | L   | 0.760      | -            | -                | -                | -         |   -10.87 | abby, empathy, Lx, madss, phoebe   |
|           14 |     1588 | 2024-05-26 | Karma            | W   | 0.760      | 0.303        | 0.004 (0.001)    | 0.075 (0.017)    | 0 (0.000) |     9.65 | abby, empathy, Lx, madss, phoebe   |
|           13 |     2186 | 2024-05-05 | Lotus fe         | W   | 0.621      | 0.250        | 0.005 (0.001)    | 0.038 (0.006)    | 0 (0.000) |     7.61 | abby, empathy, Lx, madss, phoebe   |
|           12 |     2540 | 2024-04-19 | Limitless Angels | W   | 0.515      | 0.322        | 0.003 (0.000)    | 0.051 (0.008)    | 0 (0.000) |     6.35 | abby, empathy, Lx, madss, phoebe   |
|           11 |     2718 | 2024-04-14 | FlyQuest RED     | L   | 0.481      | -            | -                | -                | -         |    -7.06 | abby, empathy, Lx, madss, phoebe   |
|           10 |     2767 | 2024-04-11 | COVEN            | W   | 0.461      | 0.322        | 0.002 (0.000)    | -                | 0 (0.000) |     3.38 | abby, empathy, Lx, madss, phoebe   |
|            9 |     2932 | 2024-04-07 | Limitless Angels | W   | 0.434      | 0.250        | 0.003 (0.000)    | 0.051 (0.006)    | 0 (0.000) |     5.37 | abby, empathy, Lx, madss, phoebe   |
|            8 |     3031 | 2024-04-03 | WG Bandits       | W   | 0.408      | 0.322        | 0.002 (0.000)    | 0.023 (0.003)    | 0 (0.000) |     4.55 | abby, empathy, Lx, madss, phoebe   |
|            7 |     3161 | 2024-03-27 | cleanup crew fe  | W   | 0.361      | 0.322        | -                | 0.023 (0.003)    | 0 (0.000) |     4.41 | abby, empathy, Lx, madss, phoebe   |
|            6 |     3258 | 2024-03-21 | Karma            | W   | 0.321      | 0.322        | 0.004 (0.000)    | 0.075 (0.008)    | -         |     4.28 | abby, empathy, Lx, madss, phoebe   |
|            5 |     3398 | 2024-03-14 | Nouns fe         | W   | 0.275      | 0.322        | 0.004 (0.000)    | 0.037 (0.003)    | -         |     3.65 | abby, empathy, Lx, madss, phoebe   |
|            4 |     3607 | 2024-03-06 | FlyQuest RED     | L   | 0.222      | -            | -                | -                | -         |    -3.28 | abby, empathy, Lx, madss, phoebe   |
|            3 |     3695 | 2024-03-03 | FlyQuest RED     | L   | 0.201      | -            | -                | -                | -         |    -3.03 | abby, empathy, Lx, madss, phoebe   |
|            2 |     3837 | 2024-02-25 | FlyQuest RED     | L   | 0.154      | -            | -                | -                | -         |    -2.36 | abby, empathy, Lx, madss, phoebe   |
|            1 |     4252 | 2024-02-04 | FlyQuest RED     | L   | 0.014      | -            | -                | -                | -         |    -0.22 | abby, empathy, Lx, madss, phoebe   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,798.98)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $750.00        | $750.00         |
| 2024-06-16 |      0.901 | $750.00        | $675.97         |
| 2024-06-02 |      0.807 | $4,000.00      | $3,228.32       |
| 2024-05-26 |      0.760 | $1,500.00      | $1,140.60       |
| 2024-05-05 |      0.621 | $750.00        | $465.70         |
| 2024-04-14 |      0.481 | $250.00        | $120.24         |
| 2024-04-07 |      0.434 | $750.00        | $325.72         |
| 2024-03-03 |      0.201 | $250.00        | $50.26          |
| 2024-02-25 |      0.154 | $250.00        | $38.58          |
| 2024-02-04 |      0.014 | $250.00        | $3.59           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

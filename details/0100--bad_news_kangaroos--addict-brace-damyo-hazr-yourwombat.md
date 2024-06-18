### Roster Details<br />
Team Name: Bad News Kangaroos<br />
Roster: ADDICT, BRACE, damyo, hazr, yourwombat<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [100](../standings_global.md)<br />
Regional Rank: [7]( ../standings_asia.md)<br />
Final Rank Value:  872.4<br />
<br />
Final Rank Value (872.4) = Starting Rank Value (860.4) + Head To Head Adjustments (12.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.399[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.188[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 860.4
- 400 + ( ( 0.227 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 860.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      392 | 2024-06-07 | Mindfreak   | L   | 1.000      | -            | -                | -                | -         |   -18.57 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           38 |      461 | 2024-06-06 | Rooster     | L   | 1.000      | -            | -                | -                | -         |   -15.68 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           37 |      867 | 2024-05-22 | KZG         | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.142 (0.047)    | 0 (0.000) |     6.32 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           36 |      872 | 2024-05-22 | KZG         | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.142 (0.047)    | 0 (0.000) |     6.69 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           35 |     1128 | 2024-05-15 | Arcade      | W   | 0.973      | 0.333        | 0.005 (0.002)    | 0.157 (0.051)    | 0 (0.000) |     5.96 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           34 |     1131 | 2024-05-15 | Arcade      | W   | 0.973      | 0.333        | 0.005 (0.002)    | 0.157 (0.051)    | 0 (0.000) |     6.30 | ADDICT, BRACE, damyo, hazr, yourwombat |
|           33 |     1403 | 2024-05-03 | FURIA       | L   | 0.895      | -            | -                | -                | -         |    -0.69 | ADDICT, BRACE, damyo, hazr, pz         |
|           32 |     1448 | 2024-05-01 | ENCE        | L   | 0.882      | -            | -                | -                | -         |    -1.18 | ADDICT, BRACE, damyo, hazr, pz         |
|           31 |     1481 | 2024-04-30 | MOUZ        | L   | 0.874      | -            | -                | -                | -         |    -0.06 | ADDICT, BRACE, damyo, hazr, pz         |
|           30 |     1703 | 2024-04-20 | FlyQuest    | L   | 0.807      | -            | -                | -                | -         |    -1.37 | ADDICT, BRACE, damyo, hazr, pz         |
|           29 |     1707 | 2024-04-20 | Rooster     | W   | 0.807      | 0.143        | 0.018 (0.002)    | -                | 0 (0.000) |    12.32 | ADDICT, BRACE, damyo, hazr, pz         |
|           28 |     1752 | 2024-04-19 | Mindfreak   | W   | 0.801      | -            | -                | -                | 0 (0.000) |     9.16 | ADDICT, BRACE, damyo, hazr, pz         |
|           27 |     1755 | 2024-04-19 | Rooster     | L   | 0.800      | -            | -                | -                | -         |   -12.80 | ADDICT, BRACE, damyo, hazr, pz         |
|           26 |     2004 | 2024-04-10 | Rooster     | W   | 0.740      | 0.333        | 0.018 (0.004)    | 0.258 (0.064)    | 0 (0.000) |    11.31 | ADDICT, BRACE, damyo, hazr, pz         |
|           25 |     2014 | 2024-04-10 | Rooster     | L   | 0.740      | -            | -                | -                | -         |   -12.23 | ADDICT, BRACE, damyo, hazr, pz         |
|           24 |     2239 | 2024-04-03 | DXA         | W   | 0.693      | 0.333        | 0.004 (0.001)    | 0.179 (0.041)    | -         |     5.28 | ADDICT, BRACE, damyo, hazr, pz         |
|           23 |     2243 | 2024-04-03 | DXA         | W   | 0.693      | 0.333        | 0.004 (0.001)    | 0.179 (0.041)    | -         |     5.52 | ADDICT, BRACE, damyo, hazr, pz         |
|           22 |     2364 | 2024-03-27 | Mindfreak   | L   | 0.647      | -            | -                | -                | -         |   -14.45 | ADDICT, BRACE, damyo, hazr, pz         |
|           21 |     2371 | 2024-03-27 | Mindfreak   | W   | 0.647      | 0.333        | -                | 0.226 (0.049)    | -         |     5.90 | ADDICT, BRACE, damyo, hazr, pz         |
|           20 |     2414 | 2024-03-23 | DXA         | W   | 0.620      | 0.315        | -                | 0.179 (0.035)    | 1 (0.620) |     5.17 | ADDICT, BRACE, damyo, hazr, pz         |
|           19 |     2417 | 2024-03-23 | Arcade      | W   | 0.620      | 0.315        | -                | 0.157 (0.031)    | 1 (0.620) |     5.74 | ADDICT, BRACE, damyo, hazr, pz         |
|           18 |     2475 | 2024-03-20 | Canon Event | W   | 0.600      | -            | -                | -                | -         |     2.14 | ADDICT, BRACE, damyo, hazr, pz         |
|           17 |     2476 | 2024-03-20 | Canon Event | W   | 0.599      | -            | -                | -                | -         |     2.19 | ADDICT, BRACE, damyo, hazr, pz         |
|           16 |     2546 | 2024-03-16 | Gods Reign  | L   | 0.573      | -            | -                | -                | -         |    -9.59 | ADDICT, BRACE, hazr, pz, yourwombat    |
|           15 |     2567 | 2024-03-15 | GRDX        | W   | 0.566      | 0.432        | 0.005 (0.001)    | -                | 1 (0.566) |     2.57 | ADDICT, BRACE, hazr, pz, yourwombat    |
|           14 |     2600 | 2024-03-14 | Aurora      | L   | 0.560      | -            | -                | -                | -         |    -0.26 | ADDICT, BRACE, hazr, pz, yourwombat    |
|           13 |     2812 | 2024-03-06 | Vantage     | W   | 0.507      | -            | -                | -                | -         |     3.92 | ADDICT, BRACE, damyo, hazr, pz         |
|           12 |     2814 | 2024-03-06 | Vantage     | W   | 0.507      | -            | -                | -                | -         |     4.06 | ADDICT, BRACE, damyo, hazr, pz         |
|           11 |     3068 | 2024-02-22 | Rooster     | L   | 0.426      | -            | -                | -                | -         |    -7.48 | ADDICT, BRACE, Hatz, hazr, pz          |
|           10 |     3087 | 2024-02-22 | Vantage     | W   | 0.420      | -            | -                | -                | -         |     3.44 | ADDICT, BRACE, Hatz, hazr, pz          |
|            9 |     3089 | 2024-02-21 | FlyQuest    | L   | 0.419      | -            | -                | -                | -         |    -0.69 | ADDICT, BRACE, Hatz, hazr, pz          |
|            8 |     3114 | 2024-02-21 | FlyQuest    | L   | 0.414      | -            | -                | -                | -         |    -0.69 | ADDICT, BRACE, Hatz, hazr, pz          |
|            7 |     3118 | 2024-02-21 | FlyQuest    | L   | 0.414      | -            | -                | -                | -         |    -0.69 | ADDICT, BRACE, Hatz, hazr, pz          |
|            6 |     3708 | 2024-01-22 | Rooster     | L   | 0.214      | -            | -                | -                | -         |    -3.86 | ADDICT, BRACE, Hatz, hazr, pz          |
|            5 |     3712 | 2024-01-22 | FlyQuest    | L   | 0.213      | -            | -                | -                | -         |    -0.37 | ADDICT, BRACE, Hatz, hazr, pz          |
|            4 |     3737 | 2024-01-21 | FlyQuest    | L   | 0.207      | -            | -                | -                | -         |    -0.36 | ADDICT, BRACE, Hatz, hazr, pz          |
|            3 |     3747 | 2024-01-20 | Rooster     | W   | 0.205      | -            | -                | -                | -         |     2.85 | ADDICT, BRACE, Hatz, hazr, pz          |
|            2 |     3843 | 2024-01-19 | FlyQuest    | W   | 0.193      | 0.143        | 0.118 (0.003)    | -                | -         |     5.77 | ADDICT, BRACE, Hatz, hazr, pz          |
|            1 |     3849 | 2024-01-18 | DXA         | W   | 0.193      | -            | -                | -                | -         |     0.43 | ADDICT, BRACE, Hatz, hazr, pz          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,318.03)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $1,050.00      | $1,050.00       |
| 2024-05-12 |      0.956 | $3,500.00      | $3,344.35       |
| 2024-03-23 |      0.620 | $3,308.00      | $2,052.07       |
| 2024-03-16 |      0.574 | $5,000.00      | $2,871.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

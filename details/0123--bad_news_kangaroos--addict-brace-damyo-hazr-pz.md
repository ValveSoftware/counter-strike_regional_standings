### Roster Details<br />
Team Name: Bad News Kangaroos<br />
Roster: ADDICT, BRACE, damyo, hazr, pz<br />
Global Rank: [123](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [7]( ../standings_asia.md)<br />
<br />
Final Rank Value:  794.6<br />
<br />
Final Rank Value (794.6) = Starting Rank Value (771.7) + Head To Head Adjustments (22.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.363[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.108[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 771.7
- 400 + ( ( 0.180 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 771.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |     2231 | 2024-05-03 | FURIA       | L   | 0.605      | -            | -                | -                | -         |    -0.16 | ADDICT, BRACE, damyo, hazr, pz      |
|           26 |     2276 | 2024-05-01 | ENCE        | L   | 0.592      | -            | -                | -                | -         |    -0.56 | ADDICT, BRACE, damyo, hazr, pz      |
|           25 |     2309 | 2024-04-30 | MOUZ        | L   | 0.584      | -            | -                | -                | -         |    -0.04 | ADDICT, BRACE, damyo, hazr, pz      |
|           24 |     2531 | 2024-04-20 | FlyQuest    | L   | 0.518      | -            | -                | -                | -         |    -1.54 | ADDICT, BRACE, damyo, hazr, pz      |
|           23 |     2535 | 2024-04-20 | Rooster     | W   | 0.517      | 0.143        | 0.010 (0.001)    | 0.266 (0.020)    | 0 (0.000) |     8.56 | ADDICT, BRACE, damyo, hazr, pz      |
|           22 |     2580 | 2024-04-19 | Mindfreak   | W   | 0.511      | 0.143        | 0.004 (0.000)    | 0.227 (0.017)    | 0 (0.000) |     6.17 | ADDICT, BRACE, damyo, hazr, pz      |
|           21 |     2583 | 2024-04-19 | Rooster     | L   | 0.510      | -            | -                | -                | -         |    -7.60 | ADDICT, BRACE, damyo, hazr, pz      |
|           20 |     2832 | 2024-04-10 | Rooster     | W   | 0.450      | 0.333        | 0.010 (0.002)    | 0.266 (0.040)    | 0 (0.000) |     7.49 | ADDICT, BRACE, damyo, hazr, pz      |
|           19 |     2842 | 2024-04-10 | Rooster     | L   | 0.450      | -            | -                | -                | -         |    -6.84 | ADDICT, BRACE, damyo, hazr, pz      |
|           18 |     3067 | 2024-04-03 | DXA         | W   | 0.404      | 0.333        | 0.002 (0.000)    | 0.228 (0.031)    | 0 (0.000) |     4.50 | ADDICT, BRACE, damyo, hazr, pz      |
|           17 |     3071 | 2024-04-03 | DXA         | W   | 0.403      | 0.333        | 0.002 (0.000)    | 0.228 (0.031)    | 0 (0.000) |     4.65 | ADDICT, BRACE, damyo, hazr, pz      |
|           16 |     3191 | 2024-03-27 | Mindfreak   | L   | 0.357      | -            | -                | -                | -         |    -7.44 | ADDICT, BRACE, damyo, hazr, pz      |
|           15 |     3198 | 2024-03-27 | Mindfreak   | W   | 0.357      | 0.333        | 0.004 (0.000)    | 0.054 (0.006)    | 0 (0.000) |     3.86 | ADDICT, BRACE, damyo, hazr, pz      |
|           14 |     3241 | 2024-03-23 | DXA         | W   | 0.331      | 0.315        | 0.002 (0.000)    | 0.228 (0.024)    | 1 (0.331) |     3.95 | ADDICT, BRACE, damyo, hazr, pz      |
|           13 |     3244 | 2024-03-23 | Arcade      | W   | 0.330      | 0.315        | 0.003 (0.000)    | 0.139 (0.014)    | 1 (0.330) |     3.87 | ADDICT, BRACE, damyo, hazr, pz      |
|           12 |     3302 | 2024-03-20 | Canon Event | W   | 0.310      | -            | -                | -                | 0 (0.000) |     1.79 | ADDICT, BRACE, damyo, hazr, pz      |
|           11 |     3303 | 2024-03-20 | Canon Event | W   | 0.310      | -            | -                | -                | -         |     1.82 | ADDICT, BRACE, damyo, hazr, pz      |
|           10 |     3373 | 2024-03-16 | Gods Reign  | L   | 0.283      | -            | -                | -                | -         |    -4.36 | ADDICT, BRACE, hazr, pz, yourwombat |
|            9 |     3394 | 2024-03-15 | GRDX        | W   | 0.276      | 0.432        | 0.002 (0.000)    | -                | 1 (0.276) |     1.83 | ADDICT, BRACE, hazr, pz, yourwombat |
|            8 |     3427 | 2024-03-14 | Aurora      | L   | 0.270      | -            | -                | -                | -         |    -0.05 | ADDICT, BRACE, hazr, pz, yourwombat |
|            7 |     3639 | 2024-03-06 | Vantage     | W   | 0.217      | 0.333        | 0.002 (0.000)    | 0.076 (0.005)    | -         |     2.33 | ADDICT, BRACE, damyo, hazr, pz      |
|            6 |     3641 | 2024-03-06 | Vantage     | W   | 0.217      | 0.333        | -                | 0.076 (0.005)    | -         |     2.36 | ADDICT, BRACE, damyo, hazr, pz      |
|            5 |     3895 | 2024-02-22 | Rooster     | L   | 0.136      | -            | -                | -                | -         |    -2.06 | ADDICT, BRACE, Hatz, hazr, pz       |
|            4 |     3914 | 2024-02-22 | Vantage     | W   | 0.130      | -            | -                | -                | -         |     1.44 | ADDICT, BRACE, Hatz, hazr, pz       |
|            3 |     3916 | 2024-02-21 | FlyQuest    | L   | 0.129      | -            | -                | -                | -         |    -0.37 | ADDICT, BRACE, Hatz, hazr, pz       |
|            2 |     3941 | 2024-02-21 | FlyQuest    | L   | 0.124      | -            | -                | -                | -         |    -0.35 | ADDICT, BRACE, Hatz, hazr, pz       |
|            1 |     3945 | 2024-02-21 | FlyQuest    | L   | 0.124      | -            | -                | -                | -         |    -0.35 | ADDICT, BRACE, Hatz, hazr, pz       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,738.72)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.850 | $1,050.00      | $892.60         |
| 2024-05-12 |      0.666 | $3,500.00      | $2,330.06       |
| 2024-03-23 |      0.331 | $3,308.00      | $1,093.42       |
| 2024-03-16 |      0.285 | $5,000.00      | $1,422.63       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

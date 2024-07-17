### Roster Details<br />
Team Name: E-Xolos LAZER<br />
Roster: danoco, land1n, mawth, tatazin, w1<br />
Region: [Americas]( ../standings_americas.md)<br />
<br />
Global Rank: [116](../standings_global.md)<br />
Regional Rank: [28]( ../standings_americas.md)<br />
Final Rank Value:  854.2<br />
<br />
Final Rank Value (854.2) = Starting Rank Value (792.8) + Head To Head Adjustments (61.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.357[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.061[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 792.8
- 400 + ( ( 0.183 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 792.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |       18 | 2024-07-16 | Nouns            | W   | 1.000      | 0.477        | 0.087 (0.042)    | 0.566 (0.270)    | 0 (0.000) |    24.13 | danoco, land1n, mawth, tatazin, w1   |
|           18 |       22 | 2024-07-16 | Nouns            | L   | 1.000      | -            | -                | -                | -         |    -6.86 | danoco, land1n, mawth, tatazin, w1   |
|           17 |      307 | 2024-06-16 | OMiT             | W   | 0.996      | 0.143        | 0.024 (0.003)    | 0.320 (0.046)    | 0 (0.000) |    15.79 | land1n, mawth, RenanZin, tatazin, w1 |
|           16 |      335 | 2024-06-15 | Strife           | W   | 0.990      | 0.143        | 0.012 (0.002)    | 0.150 (0.021)    | 0 (0.000) |    10.42 | land1n, mawth, RenanZin, tatazin, w1 |
|           15 |      369 | 2024-06-14 | Take Flyte       | L   | 0.983      | -            | -                | -                | -         |   -20.32 | land1n, mawth, RenanZin, tatazin, w1 |
|           14 |      419 | 2024-06-13 | Limitless        | W   | 0.974      | 0.371        | 0.008 (0.003)    | 0.164 (0.059)    | 0 (0.000) |    14.93 | land1n, mawth, RenanZin, tatazin, w1 |
|           13 |      444 | 2024-06-12 | Strife           | W   | 0.970      | 0.143        | 0.012 (0.002)    | 0.150 (0.021)    | 0 (0.000) |    10.89 | land1n, mawth, RenanZin, tatazin, w1 |
|           12 |      445 | 2024-06-12 | Limitless        | W   | 0.969      | 0.143        | 0.002 (0.000)    | 0.214 (0.030)    | 0 (0.000) |     8.64 | land1n, mawth, RenanZin, tatazin, w1 |
|           11 |      496 | 2024-06-10 | Strife           | W   | 0.954      | 0.371        | 0.012 (0.004)    | 0.150 (0.053)    | 0 (0.000) |    12.38 | land1n, mawth, RenanZin, tatazin, w1 |
|           10 |      521 | 2024-06-09 | OMiT             | L   | 0.950      | -            | -                | -                | -         |   -12.79 | land1n, mawth, RenanZin, tatazin, w1 |
|            9 |      583 | 2024-06-08 | straykids        | W   | 0.943      | 0.368        | 0.008 (0.003)    | -                | 0 (0.000) |    10.71 | land1n, mawth, RenanZin, tatazin, w1 |
|            8 |      592 | 2024-06-08 | Akimbo           | W   | 0.942      | 0.371        | 0.005 (0.002)    | 0.093 (0.032)    | 0 (0.000) |    11.31 | land1n, mawth, RenanZin, tatazin, w1 |
|            7 |      639 | 2024-06-07 | Strife           | W   | 0.936      | 0.368        | 0.012 (0.004)    | 0.150 (0.052)    | 0 (0.000) |    13.96 | land1n, mawth, RenanZin, tatazin, w1 |
|            6 |      700 | 2024-06-06 | Snakes Den       | L   | 0.929      | -            | -                | -                | -         |   -22.64 | land1n, mawth, RenanZin, tatazin, w1 |
|            5 |      713 | 2024-06-06 | Party Astronauts | L   | 0.928      | -            | -                | -                | -         |    -6.35 | land1n, mawth, RenanZin, tatazin, w1 |
|            4 |      818 | 2024-06-04 | Legacy           | L   | 0.916      | -            | -                | -                | -         |    -4.40 | land1n, mawth, RenanZin, tatazin, w1 |
|            3 |      859 | 2024-06-03 | Perseverance     | W   | 0.908      | 0.371        | -                | 0.077 (0.026)    | -         |     5.51 | land1n, mawth, RenanZin, tatazin, w1 |
|            2 |     1226 | 2024-05-20 | M80              | L   | 0.815      | -            | -                | -                | -         |    -1.50 | land1n, mawth, RenanZin, tatazin, w1 |
|            1 |     3517 | 2024-02-16 | Mythic           | L   | 0.189      | -            | -                | -                | -         |    -2.42 | land1n, mawth, RenanZin, tatazin, w1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,902.53)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.996 | $750.00        | $747.16         |
| 2024-06-10 |      0.956 | $3,300.00      | $3,155.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

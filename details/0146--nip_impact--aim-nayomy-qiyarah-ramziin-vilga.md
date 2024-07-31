### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, ramziiN, vilga<br />
Global Rank: [146](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [97]( ../standings_europe.md)<br />
<br />
Final Rank Value:  722.4<br />
<br />
Final Rank Value (722.4) = Starting Rank Value (702.7) + Head To Head Adjustments (19.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.307[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 702.7
- 400 + ( ( 0.147 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 702.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      345 | 2024-07-21 | France fe         | L   | 1.000      | -            | -                | -                | -         |   -17.73 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           20 |      378 | 2024-07-20 | YeYO              | W   | 1.000      | 0.294        | 0.001 (0.000)    | -                | 0 (0.000) |     7.03 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           19 |      850 | 2024-06-16 | dream catchers fe | W   | 0.899      | 0.250        | 0.016 (0.004)    | 0.170 (0.038)    | 0 (0.000) |    13.86 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           18 |     1589 | 2024-05-26 | Crescent fe       | L   | 0.759      | -            | -                | -                | -         |   -14.64 | Nayomy, Qiyarah, ramziiN, spike, vilga |
|           17 |     1799 | 2024-05-19 | Imperial fe       | L   | 0.711      | -            | -                | -                | -         |    -3.14 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           16 |     1818 | 2024-05-18 | ex-GUILD fe       | W   | 0.706      | 0.281        | 0.003 (0.001)    | 0.067 (0.013)    | 0 (0.000) |     9.35 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           15 |     2366 | 2024-04-27 | Imperial fe       | L   | 0.565      | -            | -                | -                | -         |    -2.50 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           14 |     2370 | 2024-04-27 | ENCE Athena       | W   | 0.565      | 0.252        | 0.002 (0.000)    | 0.039 (0.005)    | 0 (0.000) |     6.78 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           13 |     2554 | 2024-04-19 | BIG EQUIPA        | L   | 0.513      | -            | -                | -                | -         |    -6.91 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           12 |     2708 | 2024-04-15 | NAVI Javelins     | L   | 0.486      | -            | -                | -                | -         |    -5.66 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           11 |     2721 | 2024-04-14 | Imperial fe       | L   | 0.479      | -            | -                | -                | -         |    -2.14 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           10 |     2735 | 2024-04-13 | Astralis W        | W   | 0.473      | 0.303        | 0.001 (0.000)    | 0.022 (0.003)    | 0 (0.000) |     5.17 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            9 |     2777 | 2024-04-11 | Let Her Cook      | W   | 0.459      | 0.303        | 0.061 (0.009)    | 0.147 (0.020)    | 0 (0.000) |    10.76 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            8 |     2819 | 2024-04-10 | ex-GUILD fe       | L   | 0.453      | -            | -                | -                | -         |    -8.36 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            7 |     2881 | 2024-04-09 | NAVI Javelins     | W   | 0.445      | 0.303        | 0.027 (0.004)    | 0.194 (0.026)    | 0 (0.000) |     9.07 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            6 |     2939 | 2024-04-07 | Imperial fe       | L   | 0.432      | -            | -                | -                | -         |    -1.88 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            5 |     2944 | 2024-04-07 | Fearless Cheetahs | W   | 0.431      | 0.262        | 0.003 (0.000)    | 0.067 (0.008)    | 0 (0.000) |     6.57 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            4 |     2957 | 2024-04-06 | ex-GUILD fe       | W   | 0.425      | 0.262        | 0.003 (0.000)    | 0.067 (0.007)    | 0 (0.000) |     5.89 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            3 |     3048 | 2024-04-03 | Astralis W        | W   | 0.406      | 0.331        | -                | 0.022 (0.003)    | 0 (0.000) |     4.85 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            2 |     3296 | 2024-03-20 | ENCE Athena       | W   | 0.313      | 0.331        | 0.002 (0.000)    | 0.039 (0.004)    | -         |     4.19 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            1 |     3594 | 2024-03-07 | Imperial fe       | L   | 0.226      | -            | -                | -                | -         |    -0.93 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,811.51)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.899 | $750.00        | $674.28         |
| 2024-05-26 |      0.759 | $250.00        | $189.84         |
| 2024-04-27 |      0.565 | $321.00        | $181.46         |
| 2024-04-21 |      0.526 | $1,250.00      | $657.95         |
| 2024-04-07 |      0.432 | $250.00        | $107.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

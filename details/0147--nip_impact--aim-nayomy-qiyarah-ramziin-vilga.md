### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, ramziiN, vilga<br />
Global Rank: [147](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [97]( ../standings_europe.md)<br />
<br />
Final Rank Value:  719.6<br />
<br />
Final Rank Value (719.6) = Starting Rank Value (695.6) + Head To Head Adjustments (24.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 695.6
- 400 + ( ( 0.150 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 695.6


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
|           25 |      328 | 2024-08-04 | Imperial fe       | L   | 1.000      | -            | -                | -                | -         |    -4.87 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           24 |      336 | 2024-08-04 | Spirit fe         | W   | 1.000      | 0.273        | 0.005 (0.001)    | 0.129 (0.035)    | 0 (0.000) |    11.68 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           23 |      377 | 2024-08-03 | Imperial fe       | L   | 1.000      | -            | -                | -                | -         |    -4.82 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           22 |      403 | 2024-08-02 | Spirit fe         | W   | 1.000      | 0.273        | 0.005 (0.001)    | 0.129 (0.035)    | 0 (0.000) |    11.77 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           21 |      826 | 2024-07-21 | France fe         | L   | 1.000      | -            | -                | -                | -         |   -17.50 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           20 |      859 | 2024-07-20 | YeYO              | W   | 1.000      | 0.294        | 0.001 (0.000)    | -                | 0 (0.000) |     7.37 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           19 |     1331 | 2024-06-16 | dream catchers fe | W   | 0.806      | 0.250        | 0.015 (0.003)    | 0.201 (0.041)    | 0 (0.000) |    12.78 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           18 |     2070 | 2024-05-26 | Crescent fe       | L   | 0.666      | -            | -                | -                | -         |   -12.71 | Nayomy, Qiyarah, ramziiN, spike, vilga |
|           17 |     2280 | 2024-05-19 | Imperial fe       | L   | 0.618      | -            | -                | -                | -         |    -3.29 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           16 |     2299 | 2024-05-18 | Astralis W        | W   | 0.612      | 0.281        | 0.002 (0.000)    | 0.050 (0.009)    | 0 (0.000) |     8.01 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           15 |     2847 | 2024-04-27 | Imperial fe       | L   | 0.472      | -            | -                | -                | -         |    -2.54 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           14 |     2851 | 2024-04-27 | ENCE Athena       | W   | 0.472      | 0.252        | 0.002 (0.000)    | 0.063 (0.008)    | 0 (0.000) |     5.68 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           13 |     3035 | 2024-04-19 | BIG EQUIPA        | L   | 0.420      | -            | -                | -                | -         |    -6.01 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           12 |     3189 | 2024-04-15 | NAVI Javelins     | L   | 0.393      | -            | -                | -                | -         |    -4.94 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           11 |     3202 | 2024-04-14 | Imperial fe       | L   | 0.386      | -            | -                | -                | -         |    -2.11 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           10 |     3216 | 2024-04-13 | Astralis W        | W   | 0.379      | -            | -                | -                | 0 (0.000) |     4.05 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            9 |     3258 | 2024-04-11 | Let Her Cook      | W   | 0.366      | 0.303        | 0.056 (0.006)    | 0.122 (0.014)    | 0 (0.000) |     8.18 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            8 |     3300 | 2024-04-10 | Astralis W        | L   | 0.360      | -            | -                | -                | -         |    -6.73 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            7 |     3362 | 2024-04-09 | NAVI Javelins     | W   | 0.352      | 0.303        | 0.024 (0.003)    | 0.158 (0.017)    | 0 (0.000) |     6.79 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            6 |     3420 | 2024-04-07 | Imperial fe       | L   | 0.339      | -            | -                | -                | -         |    -1.84 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            5 |     3425 | 2024-04-07 | Fearless Cheetahs | W   | 0.338      | 0.262        | 0.002 (0.000)    | 0.053 (0.005)    | 0 (0.000) |     4.89 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            4 |     3438 | 2024-04-06 | Astralis W        | W   | 0.331      | 0.262        | 0.002 (0.000)    | 0.050 (0.004)    | -         |     4.46 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            3 |     3529 | 2024-04-03 | Astralis W        | W   | 0.313      | -            | -                | -                | -         |     3.56 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            2 |     3777 | 2024-03-20 | ENCE Athena       | W   | 0.220      | 0.331        | -                | 0.063 (0.005)    | -         |     2.85 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            1 |     4075 | 2024-03-07 | Imperial fe       | L   | 0.133      | -            | -                | -                | -         |    -0.69 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,359.47)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $811.00        | $811.00         |
| 2024-06-16 |      0.806 | $750.00        | $604.35         |
| 2024-05-26 |      0.666 | $250.00        | $166.53         |
| 2024-04-27 |      0.472 | $321.00        | $151.53         |
| 2024-04-21 |      0.433 | $1,250.00      | $541.40         |
| 2024-04-07 |      0.339 | $250.00        | $84.67          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

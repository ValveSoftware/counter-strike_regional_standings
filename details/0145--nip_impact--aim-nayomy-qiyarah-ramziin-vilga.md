### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, ramziiN, vilga<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [145](../standings_global.md)<br />
Regional Rank: [96]( ../standings_europe.md)<br />
Final Rank Value:  731.1<br />
<br />
Final Rank Value (731.1) = Starting Rank Value (708.9) + Head To Head Adjustments (22.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.317[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.153<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 708.9
- 400 + ( ( 0.153 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 708.9


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
|           21 |      103 | 2024-07-21 | France fe         | L   | 1.000      | -            | -                | -                | -         |   -18.04 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           20 |      136 | 2024-07-20 | YeYO              | W   | 1.000      | 0.294        | 0.001 (0.000)    | -                | 0 (0.000) |     6.75 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           19 |      608 | 2024-06-16 | dream catchers fe | W   | 0.946      | 0.250        | 0.019 (0.005)    | 0.182 (0.043)    | 0 (0.000) |    14.17 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           18 |     1347 | 2024-05-26 | Crescent fe       | L   | 0.807      | -            | -                | -                | -         |   -15.75 | Nayomy, Qiyarah, ramziiN, spike, vilga |
|           17 |     1557 | 2024-05-19 | Imperial fe       | L   | 0.758      | -            | -                | -                | -         |    -3.10 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           16 |     1576 | 2024-05-18 | ex-GUILD fe       | W   | 0.753      | 0.281        | 0.003 (0.001)    | 0.081 (0.017)    | 0 (0.000) |     9.86 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           15 |     2124 | 2024-04-27 | Imperial fe       | L   | 0.613      | -            | -                | -                | -         |    -2.50 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           14 |     2128 | 2024-04-27 | ENCE Athena       | W   | 0.612      | 0.252        | 0.003 (0.000)    | 0.049 (0.007)    | 0 (0.000) |     7.17 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           13 |     2312 | 2024-04-19 | BIG EQUIPA        | L   | 0.560      | -            | -                | -                | -         |    -7.48 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           12 |     2466 | 2024-04-15 | NAVI Javelins     | L   | 0.533      | -            | -                | -                | -         |    -6.13 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           11 |     2479 | 2024-04-14 | Imperial fe       | L   | 0.527      | -            | -                | -                | -         |    -2.16 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|           10 |     2493 | 2024-04-13 | Astralis W        | W   | 0.520      | 0.303        | 0.002 (0.000)    | 0.027 (0.004)    | 0 (0.000) |     5.54 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            9 |     2535 | 2024-04-11 | Let Her Cook      | W   | 0.506      | 0.303        | 0.077 (0.012)    | 0.170 (0.026)    | 0 (0.000) |    11.97 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            8 |     2577 | 2024-04-10 | ex-GUILD fe       | L   | 0.500      | -            | -                | -                | -         |    -9.31 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            7 |     2639 | 2024-04-09 | NAVI Javelins     | W   | 0.493      | 0.303        | 0.035 (0.005)    | 0.227 (0.034)    | 0 (0.000) |    10.12 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            6 |     2697 | 2024-04-07 | Imperial fe       | L   | 0.479      | -            | -                | -                | -         |    -1.89 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            5 |     2702 | 2024-04-07 | Fearless Cheetahs | W   | 0.478      | 0.262        | 0.004 (0.000)    | 0.079 (0.010)    | 0 (0.000) |     7.30 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            4 |     2715 | 2024-04-06 | ex-GUILD fe       | W   | 0.472      | 0.262        | 0.003 (0.000)    | 0.081 (0.010)    | 0 (0.000) |     6.51 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            3 |     2806 | 2024-04-03 | Astralis W        | W   | 0.453      | 0.331        | -                | 0.027 (0.004)    | 0 (0.000) |     5.33 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            2 |     3054 | 2024-03-20 | ENCE Athena       | W   | 0.361      | 0.331        | 0.003 (0.000)    | 0.049 (0.006)    | -         |     4.78 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            1 |     3352 | 2024-03-07 | Imperial fe       | L   | 0.274      | -            | -                | -                | -         |    -1.01 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,944.91)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.946 | $750.00        | $709.75         |
| 2024-05-26 |      0.807 | $250.00        | $201.66         |
| 2024-04-27 |      0.613 | $321.00        | $196.64         |
| 2024-04-21 |      0.574 | $1,250.00      | $717.06         |
| 2024-04-07 |      0.479 | $250.00        | $119.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

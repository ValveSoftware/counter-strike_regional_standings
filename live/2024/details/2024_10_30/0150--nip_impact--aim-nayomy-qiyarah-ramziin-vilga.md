### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, ramziiN, vilga<br />
Global Rank: [150](../../standings_global_2024_10_30.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_30.md)<br />
Regional Rank: [101]( ../../standings_europe_2024_10_30.md)<br />
<br />
Final Rank Value:  727.4<br />
<br />
Final Rank Value (727.4) = Starting Rank Value (685.9) + Head To Head Adjustments (41.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.9
- 400 + ( ( 0.144 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 685.9


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
|           17 |      221 | 2024-10-18 | Let Her Cook      | L   | 1.000      | -            | -                | -                | -         |   -15.14 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           16 |      595 | 2024-10-03 | Astralis W        | W   | 1.000      | 0.328        | 0.005 (0.002)    | 0.062 (0.020)    | 0 (0.000) |    12.91 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           15 |      905 | 2024-09-25 | Spirit fe         | W   | 0.967      | 0.328        | 0.014 (0.005)    | 0.166 (0.053)    | 0 (0.000) |    13.41 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           14 |     1255 | 2024-09-14 | NAVI Javelins     | L   | 0.893      | -            | -                | -                | -         |   -12.28 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           13 |     1268 | 2024-09-14 | Insilio fe        | W   | 0.892      | 0.294        | 0.006 (0.002)    | 0.033 (0.009)    | 0 (0.000) |    12.12 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           12 |     1508 | 2024-09-05 | NAVI Javelins     | W   | 0.834      | 0.328        | 0.018 (0.005)    | 0.207 (0.057)    | 0 (0.000) |    15.09 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           11 |     1754 | 2024-08-28 | ENCE Athena       | W   | 0.781      | 0.328        | 0.004 (0.001)    | 0.023 (0.006)    | 0 (0.000) |     9.80 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           10 |     2609 | 2024-08-04 | Imperial fe       | L   | 0.620      | -            | -                | -                | -         |    -6.06 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            9 |     2617 | 2024-08-04 | Spirit fe         | W   | 0.620      | 0.273        | 0.014 (0.002)    | 0.166 (0.028)    | 0 (0.000) |     9.87 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            8 |     2658 | 2024-08-03 | Imperial fe       | L   | 0.612      | -            | -                | -                | -         |    -6.04 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            7 |     2684 | 2024-08-02 | Spirit fe         | W   | 0.607      | 0.273        | 0.014 (0.002)    | 0.166 (0.027)    | 0 (0.000) |     9.79 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            6 |     3107 | 2024-07-21 | France fe         | L   | 0.525      | -            | -                | -                | -         |    -9.28 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            5 |     3140 | 2024-07-20 | YeYO              | W   | 0.519      | 0.294        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.35 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            4 |     3612 | 2024-06-16 | dream catchers fe | W   | 0.293      | 0.250        | 0.011 (0.001)    | 0.218 (0.016)    | 0 (0.000) |     5.04 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            3 |     4351 | 2024-05-26 | Crescent fe       | L   | 0.154      | -            | -                | -                | -         |    -2.52 | Nayomy, Qiyarah, ramziiN, spike, vilga |
|            2 |     4561 | 2024-05-19 | Imperial fe       | L   | 0.105      | -            | -                | -                | -         |    -1.08 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            1 |     4580 | 2024-05-18 | Astralis W        | W   | 0.100      | 0.281        | 0.005 (0.000)    | 0.062 (0.002)    | 0 (0.000) |     1.53 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($761.48)
- Divide that value by the 5th highest value among all rosters ($242,848.56)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      0.620 | $811.00        | $503.13         |
| 2024-06-16 |      0.293 | $750.00        | $219.96         |
| 2024-05-26 |      0.154 | $250.00        | $38.40          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

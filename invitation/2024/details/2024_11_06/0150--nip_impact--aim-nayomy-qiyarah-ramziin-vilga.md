### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, ramziiN, vilga<br />
Global Rank: [150](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [101]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  695.3<br />
<br />
Final Rank Value (695.3) = Starting Rank Value (658.5) + Head To Head Adjustments (36.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 658.5
- 400 + ( ( 0.132 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 658.5


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
|           17 |      362 | 2024-10-18 | Let Her Cook      | L   | 1.000      | -            | -                | -                | -         |   -15.74 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           16 |      736 | 2024-10-03 | Astralis W        | W   | 0.974      | 0.328        | 0.003 (0.001)    | 0.063 (0.020)    | 0 (0.000) |    12.80 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           15 |     1046 | 2024-09-25 | Spirit fe         | W   | 0.921      | 0.328        | 0.007 (0.002)    | 0.171 (0.052)    | 0 (0.000) |    12.87 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           14 |     1396 | 2024-09-14 | NAVI Javelins     | L   | 0.847      | -            | -                | -                | -         |   -12.12 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           13 |     1409 | 2024-09-14 | Insilio fe        | W   | 0.846      | 0.294        | 0.003 (0.001)    | 0.032 (0.008)    | 0 (0.000) |    11.66 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           12 |     1649 | 2024-09-05 | NAVI Javelins     | W   | 0.788      | 0.328        | 0.008 (0.002)    | 0.211 (0.055)    | 0 (0.000) |    13.79 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           11 |     1895 | 2024-08-28 | ENCE Athena       | W   | 0.734      | 0.328        | 0.002 (0.001)    | 0.023 (0.006)    | 0 (0.000) |     9.57 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           10 |     2750 | 2024-08-04 | Imperial fe       | L   | 0.574      | -            | -                | -                | -         |    -6.37 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            9 |     2758 | 2024-08-04 | Spirit fe         | W   | 0.573      | 0.273        | 0.007 (0.001)    | 0.171 (0.027)    | 0 (0.000) |     9.15 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            8 |     2799 | 2024-08-03 | Imperial fe       | L   | 0.566      | -            | -                | -                | -         |    -6.36 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            7 |     2825 | 2024-08-02 | Spirit fe         | W   | 0.560      | 0.273        | 0.007 (0.001)    | 0.171 (0.026)    | 0 (0.000) |     9.03 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            6 |     3248 | 2024-07-21 | France fe         | L   | 0.479      | -            | -                | -                | -         |    -8.36 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            5 |     3281 | 2024-07-20 | YeYO              | W   | 0.473      | 0.294        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.28 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            4 |     3753 | 2024-06-16 | dream catchers fe | W   | 0.247      | 0.250        | 0.005 (0.000)    | 0.222 (0.014)    | 0 (0.000) |     4.19 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            3 |     4492 | 2024-05-26 | Crescent fe       | L   | 0.107      | -            | -                | -                | -         |    -1.75 | Nayomy, Qiyarah, ramziiN, spike, vilga |
|            2 |     4702 | 2024-05-19 | Imperial fe       | L   | 0.059      | -            | -                | -                | -         |    -0.69 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            1 |     4721 | 2024-05-18 | Astralis W        | W   | 0.054      | 0.281        | 0.003 (0.000)    | 0.063 (0.001)    | 0 (0.000) |     0.82 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($677.82)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      0.574 | $811.00        | $465.66         |
| 2024-06-16 |      0.247 | $750.00        | $185.31         |
| 2024-05-26 |      0.107 | $250.00        | $26.85          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

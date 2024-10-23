### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, ramziiN, vilga<br />
Global Rank: [150](../../standings_global_2024_10_23.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_23.md)<br />
Regional Rank: [101]( ../../standings_europe_2024_10_23.md)<br />
<br />
Final Rank Value:  725.3<br />
<br />
Final Rank Value (725.3) = Starting Rank Value (681.0) + Head To Head Adjustments (44.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 681.0
- 400 + ( ( 0.143 - 0.000 ) / ( 0.816 - 0.000 ) ) * 1600 = 681.0


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
|           19 |       91 | 2024-10-18 | Let Her Cook      | L   | 1.000      | -            | -                | -                | -         |   -14.93 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           18 |      465 | 2024-10-03 | Astralis W        | W   | 1.000      | 0.328        | 0.004 (0.001)    | 0.066 (0.022)    | 0 (0.000) |    12.81 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           17 |      775 | 2024-09-25 | Spirit fe         | W   | 1.000      | 0.328        | 0.010 (0.003)    | 0.139 (0.046)    | 0 (0.000) |    13.47 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           16 |     1125 | 2024-09-14 | NAVI Javelins     | L   | 0.939      | -            | -                | -                | -         |   -12.77 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           15 |     1138 | 2024-09-14 | Insilio fe        | W   | 0.938      | 0.294        | 0.006 (0.002)    | 0.037 (0.010)    | 0 (0.000) |    12.75 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           14 |     1378 | 2024-09-05 | NAVI Javelins     | W   | 0.880      | 0.328        | 0.018 (0.005)    | 0.217 (0.063)    | 0 (0.000) |    16.05 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           13 |     1624 | 2024-08-28 | ENCE Athena       | W   | 0.827      | 0.328        | 0.004 (0.001)    | 0.025 (0.007)    | 0 (0.000) |    10.30 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           12 |     2479 | 2024-08-04 | Imperial fe       | L   | 0.666      | -            | -                | -                | -         |    -6.09 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           11 |     2487 | 2024-08-04 | Spirit fe         | W   | 0.666      | 0.273        | 0.010 (0.002)    | 0.139 (0.025)    | 0 (0.000) |    10.34 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|           10 |     2528 | 2024-08-03 | Imperial fe       | L   | 0.658      | -            | -                | -                | -         |    -6.06 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            9 |     2554 | 2024-08-02 | Spirit fe         | W   | 0.653      | 0.273        | 0.010 (0.002)    | 0.139 (0.025)    | 0 (0.000) |    10.28 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            8 |     2977 | 2024-07-21 | France fe         | L   | 0.571      | -            | -                | -                | -         |   -10.03 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            7 |     3010 | 2024-07-20 | YeYO              | W   | 0.565      | 0.294        | 0.000 (0.000)    | -                | 0 (0.000) |     4.78 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            6 |     3482 | 2024-06-16 | dream catchers fe | W   | 0.339      | 0.250        | 0.011 (0.001)    | 0.229 (0.019)    | 0 (0.000) |     5.85 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            5 |     4221 | 2024-05-26 | Crescent fe       | L   | 0.200      | -            | -                | -                | -         |    -3.27 | Nayomy, Qiyarah, ramziiN, spike, vilga |
|            4 |     4431 | 2024-05-19 | Imperial fe       | L   | 0.151      | -            | -                | -                | -         |    -1.47 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            3 |     4450 | 2024-05-18 | Astralis W        | W   | 0.146      | 0.281        | 0.004 (0.000)    | 0.066 (0.003)    | 0 (0.000) |     2.24 | aiM, Nayomy, Qiyarah, ramziiN, vilga   |
|            2 |     4998 | 2024-04-27 | Imperial fe       | L   | 0.006      | -            | -                | -                | -         |    -0.05 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |
|            1 |     5002 | 2024-04-27 | ENCE Athena       | W   | 0.005      | 0.252        | -                | 0.025 (0.000)    | -         |     0.07 | aiM, jenkon, Nayomy, Qiyarah, ramziiN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($846.62)
- Divide that value by the 5th highest value among all rosters ($270,964.47)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      0.666 | $811.00        | $540.45         |
| 2024-06-16 |      0.339 | $750.00        | $254.48         |
| 2024-05-26 |      0.200 | $250.00        | $49.90          |
| 2024-04-27 |      0.006 | $321.00        | $1.78           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

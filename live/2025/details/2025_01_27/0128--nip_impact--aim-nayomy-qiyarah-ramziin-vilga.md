### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, ramziiN, vilga<br />
Global Rank: [128](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [91]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  783.8<br />
<br />
Final Rank Value (783.8) = Starting Rank Value (785.1) + Head To Head Adjustments (-1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.388[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 785.1
- 400 + ( ( 0.197 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 785.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      835 | 2024-11-23 | BIG EQUIPA    | L   | 0.766      | -            | -                | -                | -         |    -9.76 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|           13 |      852 | 2024-11-22 | K27 fe        | W   | 0.761      | 0.524        | 0.016 (0.006)    | 0.117 (0.047)    | 1 (0.761) |    10.96 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|           12 |      864 | 2024-11-22 | BIG EQUIPA    | L   | 0.759      | -            | -                | -                | -         |    -9.87 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|           11 |     1595 | 2024-10-18 | Let Her Cook  | L   | 0.527      | -            | -                | -                | -         |   -11.29 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|           10 |     1969 | 2024-10-03 | Denmark fe    | W   | 0.427      | 0.328        | 0.020 (0.003)    | 0.112 (0.016)    | 0 (0.000) |     6.14 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            9 |     2279 | 2024-09-25 | Spirit fe     | W   | 0.374      | 0.328        | 0.007 (0.001)    | 0.093 (0.011)    | 0 (0.000) |     3.86 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            8 |     2629 | 2024-09-14 | NAVI Javelins | L   | 0.300      | -            | -                | -                | -         |    -0.78 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            7 |     2642 | 2024-09-14 | Insilio fe    | W   | 0.299      | 0.294        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.93 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            6 |     2882 | 2024-09-05 | NAVI Javelins | W   | 0.241      | 0.328        | 0.296 (0.023)    | 0.387 (0.031)    | 0 (0.000) |     7.00 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            5 |     3128 | 2024-08-28 | ENCE Athena   | W   | 0.187      | 0.328        | 0.003 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.18 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            4 |     3983 | 2024-08-04 | Imperial fe   | L   | 0.027      | -            | -                | -                | -         |    -0.07 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            3 |     3991 | 2024-08-04 | Spirit fe     | W   | 0.026      | 0.273        | 0.007 (0.000)    | 0.093 (0.001)    | 0 (0.000) |     0.28 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            2 |     4032 | 2024-08-03 | Imperial fe   | L   | 0.019      | -            | -                | -                | -         |    -0.05 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            1 |     4058 | 2024-08-02 | Spirit fe     | W   | 0.013      | 0.273        | 0.007 (0.000)    | 0.093 (0.000)    | 0 (0.000) |     0.14 | aiM, Nayomy, Qiyarah, ramziiN, vilga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,436.32)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.773 | $7,000.00      | $5,414.44       |
| 2024-08-04 |      0.027 | $811.00        | $21.88          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, ramziiN, vilga<br />
Global Rank: [125](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [90]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  795.1<br />
<br />
Final Rank Value (795.1) = Starting Rank Value (794.8) + Head To Head Adjustments (0.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.388[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.199<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 794.8
- 400 + ( ( 0.199 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 794.8


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
|           14 |      632 | 2024-11-23 | BIG EQUIPA    | L   | 0.818      | -            | -                | -                | -         |   -10.51 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|           13 |      649 | 2024-11-22 | K27 fe        | W   | 0.813      | 0.524        | 0.015 (0.007)    | 0.122 (0.052)    | 1 (0.813) |    11.70 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|           12 |      661 | 2024-11-22 | BIG EQUIPA    | L   | 0.811      | -            | -                | -                | -         |   -10.65 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|           11 |     1392 | 2024-10-18 | Let Her Cook  | L   | 0.579      | -            | -                | -                | -         |   -12.54 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|           10 |     1766 | 2024-10-03 | Denmark fe    | W   | 0.479      | 0.328        | 0.020 (0.003)    | 0.112 (0.018)    | 0 (0.000) |     6.74 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            9 |     2076 | 2024-09-25 | Spirit fe     | W   | 0.426      | 0.328        | 0.007 (0.001)    | 0.096 (0.013)    | 0 (0.000) |     4.33 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            8 |     2426 | 2024-09-14 | NAVI Javelins | L   | 0.352      | -            | -                | -                | -         |    -0.90 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            7 |     2439 | 2024-09-14 | Insilio fe    | W   | 0.351      | 0.294        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.03 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            6 |     2679 | 2024-09-05 | NAVI Javelins | W   | 0.293      | 0.328        | 0.293 (0.028)    | 0.384 (0.037)    | 0 (0.000) |     8.53 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            5 |     2925 | 2024-08-28 | ENCE Athena   | W   | 0.239      | 0.328        | 0.003 (0.000)    | 0.006 (0.001)    | 0 (0.000) |     1.45 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            4 |     3780 | 2024-08-04 | Imperial fe   | L   | 0.079      | -            | -                | -                | -         |    -0.20 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            3 |     3788 | 2024-08-04 | Spirit fe     | W   | 0.078      | 0.273        | 0.007 (0.000)    | 0.096 (0.002)    | 0 (0.000) |     0.82 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            2 |     3829 | 2024-08-03 | Imperial fe   | L   | 0.071      | -            | -                | -                | -         |    -0.18 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            1 |     3855 | 2024-08-02 | Spirit fe     | W   | 0.065      | 0.273        | 0.007 (0.000)    | 0.096 (0.002)    | 0 (0.000) |     0.69 | aiM, Nayomy, Qiyarah, ramziiN, vilga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,843.30)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.826 | $7,000.00      | $5,779.17       |
| 2024-08-04 |      0.079 | $811.00        | $64.13          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

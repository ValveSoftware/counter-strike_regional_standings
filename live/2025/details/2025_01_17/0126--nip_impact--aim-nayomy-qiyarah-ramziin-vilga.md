### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, ramziiN, vilga<br />
Global Rank: [126](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [91]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  795.9<br />
<br />
Final Rank Value (795.9) = Starting Rank Value (795.1) + Head To Head Adjustments (0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.388[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.101[<sup>2</sup>](#table1)

The average of these factors is 0.199<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 795.1
- 400 + ( ( 0.199 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 795.1


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
|           14 |      623 | 2024-11-23 | BIG EQUIPA    | L   | 0.831      | -            | -                | -                | -         |   -10.71 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|           13 |      640 | 2024-11-22 | K27 fe        | W   | 0.826      | 0.524        | 0.015 (0.007)    | 0.123 (0.053)    | 1 (0.826) |    11.90 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|           12 |      652 | 2024-11-22 | BIG EQUIPA    | L   | 0.824      | -            | -                | -                | -         |   -10.87 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|           11 |     1383 | 2024-10-18 | Let Her Cook  | L   | 0.593      | -            | -                | -                | -         |   -12.85 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|           10 |     1757 | 2024-10-03 | Denmark fe    | W   | 0.493      | 0.328        | 0.020 (0.003)    | 0.112 (0.018)    | 0 (0.000) |     6.89 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            9 |     2067 | 2024-09-25 | Spirit fe     | W   | 0.440      | 0.328        | 0.008 (0.001)    | 0.097 (0.014)    | 0 (0.000) |     4.46 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            8 |     2417 | 2024-09-14 | NAVI Javelins | L   | 0.365      | -            | -                | -                | -         |    -0.94 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            7 |     2430 | 2024-09-14 | Insilio fe    | W   | 0.364      | 0.294        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.06 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            6 |     2670 | 2024-09-05 | NAVI Javelins | W   | 0.306      | 0.328        | 0.293 (0.029)    | 0.382 (0.038)    | 0 (0.000) |     8.93 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            5 |     2916 | 2024-08-28 | ENCE Athena   | W   | 0.253      | 0.328        | 0.003 (0.000)    | 0.007 (0.001)    | 0 (0.000) |     1.53 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            4 |     3771 | 2024-08-04 | Imperial fe   | L   | 0.093      | -            | -                | -                | -         |    -0.24 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            3 |     3779 | 2024-08-04 | Spirit fe     | W   | 0.092      | 0.273        | 0.008 (0.000)    | 0.097 (0.002)    | 0 (0.000) |     0.97 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            2 |     3820 | 2024-08-03 | Imperial fe   | L   | 0.085      | -            | -                | -                | -         |    -0.22 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            1 |     3846 | 2024-08-02 | Spirit fe     | W   | 0.079      | 0.273        | 0.008 (0.000)    | 0.097 (0.002)    | 0 (0.000) |     0.83 | aiM, Nayomy, Qiyarah, ramziiN, vilga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,949.30)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.839 | $7,000.00      | $5,874.16       |
| 2024-08-04 |      0.093 | $811.00        | $75.14          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

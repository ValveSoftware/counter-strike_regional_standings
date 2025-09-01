### Roster Details<br />
Team Name: NIP Impact<br />
Roster: aiM, Nayomy, Qiyarah, vilga, Zana<br />
Global Rank: [144](../../standings_global_2025_09_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_09_01.md)<br />
Regional Rank: [89]( ../../standings_europe_2025_09_01.md)<br />
<br />
Final Rank Value:  692.5<br />
<br />
Final Rank Value (692.5) = Starting Rank Value (778.8) + Head To Head Adjustments (-86.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.405[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.120[<sup>2</sup>](#table1)

The average of these factors is 0.197<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 778.8
- 400 + ( ( 0.197 - 0.000 ) / ( 0.834 - 0.000 ) ) * 1600 = 778.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      369 | 2025-08-14 | HEROIC Academy     | L   | 1.000      | -            | -                | -                | -         |   -15.48 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|           14 |      406 | 2025-08-13 | Imperial Valkyries | L   | 1.000      | -            | -                | -                | -         |   -14.60 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|           13 |      594 | 2025-08-07 | TPuDCATb TPu       | L   | 1.000      | -            | -                | -                | -         |   -10.74 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|           12 |      615 | 2025-08-05 | ARCRED             | L   | 1.000      | -            | -                | -                | -         |    -9.36 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|           11 |      826 | 2025-07-24 | Eternal Fire       | L   | 0.939      | -            | -                | -                | -         |   -11.89 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|           10 |      832 | 2025-07-23 | Betera             | L   | 0.934      | -            | -                | -                | -         |    -9.98 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|            9 |      939 | 2025-07-17 | Partizan           | L   | 0.894      | -            | -                | -                | -         |    -8.10 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|            8 |      970 | 2025-07-16 | Metizport          | L   | 0.887      | -            | -                | -                | -         |    -8.79 | aiM, Nayomy, Qiyarah, vilga, Zana    |
|            7 |     1725 | 2025-05-24 | Shimmer            | L   | 0.534      | -            | -                | -                | -         |    -7.82 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            6 |     1751 | 2025-05-22 | Imperial Valkyries | W   | 0.522      | 0.624        | 0.034 (0.011)    | 0.107 (0.035)    | 1 (0.522) |     7.84 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            5 |     1755 | 2025-05-22 | MIBR fe            | W   | 0.521      | 0.624        | 0.010 (0.003)    | 0.024 (0.008)    | 1 (0.521) |     5.37 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            4 |     2704 | 2025-04-11 | Eco Warriors       | L   | 0.247      | -            | -                | -                | -         |    -5.41 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            3 |     2970 | 2025-04-02 | nomercy fe         | W   | 0.187      | 0.525        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.07 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            2 |     3324 | 2025-03-26 | AKA HERO KAJO      | W   | 0.141      | 0.525        | 0.001 (0.000)    | 0.065 (0.005)    | 0 (0.000) |     1.19 | aiM, Nayomy, Qiyarah, ramziiN, vilga |
|            1 |     3688 | 2025-03-12 | Peekaboo           | W   | 0.048      | 0.525        | 0.001 (0.000)    | 0.050 (0.001)    | 0 (0.000) |     0.36 | aiM, Nayomy, Qiyarah, ramziiN, vilga |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,325.30)
- Divide that value by the 5th highest value among all rosters ($421,876.14)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-25 |      0.541 | $26,500.00     | $14,325.30      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

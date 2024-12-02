### Roster Details<br />
Team Name: Heimo<br />
Roster: arvid, japE, oopee, spargo, Welho<br />
Global Rank: [179](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [117]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  674.7<br />
<br />
Final Rank Value (674.7) = Starting Rank Value (671.5) + Head To Head Adjustments (3.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 671.5
- 400 + ( ( 0.135 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 671.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      840 | 2024-10-24 | GenOne       | L   | 0.938      | -            | -                | -                | -         |   -12.14 | arvid, japE, oopee, spargo, Welho  |
|           15 |      859 | 2024-10-22 | Verdant      | W   | 0.925      | 0.333        | 0.015 (0.005)    | 0.239 (0.074)    | 0 (0.000) |    19.61 | arvid, japE, oopee, spargo, Welho  |
|           14 |      893 | 2024-10-20 | NAVI Junior  | L   | 0.911      | -            | -                | -                | -         |    -2.58 | arvid, japE, oopee, spargo, Welho  |
|           13 |     1196 | 2024-10-06 | JANO         | L   | 0.821      | -            | -                | -                | -         |    -5.45 | arvid, japE, oopee, spargo, Welho  |
|           12 |     1212 | 2024-10-06 | cspojat      | W   | 0.819      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.54 | arvid, japE, oopee, spargo, Welho  |
|           11 |     1218 | 2024-10-06 | NAVI Junior  | L   | 0.818      | -            | -                | -                | -         |    -2.85 | arvid, japE, oopee, spargo, Welho  |
|           10 |     1232 | 2024-10-05 | ENCE Academy | L   | 0.814      | -            | -                | -                | -         |    -9.24 | arvid, japE, oopee, spargo, Welho  |
|            9 |     1248 | 2024-10-05 | Preasy       | W   | 0.812      | 0.333        | 0.004 (0.001)    | 0.134 (0.036)    | 0 (0.000) |    14.04 | arvid, japE, oopee, spargo, Welho  |
|            8 |     1323 | 2024-10-03 | Anonymo      | W   | 0.798      | 0.333        | 0.046 (0.012)    | 0.266 (0.071)    | 0 (0.000) |    16.05 | arvid, japE, oopee, Welho, ykis    |
|            7 |     1403 | 2024-10-01 | L&G          | L   | 0.786      | -            | -                | -                | -         |    -6.45 | arvid, japE, oopee, Welho, ykis    |
|            6 |     3434 | 2024-08-01 | JANO         | L   | 0.381      | -            | -                | -                | -         |    -2.19 | arvid, japE, oopee, Welho, ykis    |
|            5 |     3815 | 2024-07-21 | INFINITE     | L   | 0.306      | -            | -                | -                | -         |    -6.65 | arvid, japE, oopee, Welho, ykis    |
|            4 |     3854 | 2024-07-20 | 777          | W   | 0.300      | 0.143        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     2.41 | arvid, japE, oopee, Welho, ykis    |
|            3 |     3877 | 2024-07-19 | CPH Wolves   | L   | 0.294      | -            | -                | -                | -         |    -3.15 | arvid, japE, oopee, Welho, ykis    |
|            2 |     4289 | 2024-06-24 | devils.one   | L   | 0.127      | -            | -                | -                | -         |    -1.65 | arvid, oopee, Sm1llee, Welho, ykis |
|            1 |     4295 | 2024-06-23 | Revenant     | L   | 0.118      | -            | -                | -                | -         |    -1.10 | arvid, oopee, Sm1llee, Welho, ykis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($454.07)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: Just Swing<br />
Roster: gas, Marek, Purely, qqGOD, VanceKK<br />
Global Rank: [125](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_06_02.md)<br />
Regional Rank: [19]( ../../standings_asia_2025_06_02.md)<br />
<br />
Final Rank Value:  722.0<br />
<br />
Final Rank Value (722.0) = Starting Rank Value (765.7) + Head To Head Adjustments (-43.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.267[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.063[<sup>2</sup>](#table1)
- LAN Wins: 0.190[<sup>2</sup>](#table1)

The average of these factors is 0.199<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 765.7
- 400 + ( ( 0.199 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 765.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      660 | 2025-04-29 | FengDa            | L   | 0.977      | -            | -                | -                | -         |   -12.60 | gas, Marek, Purely, qqGOD, VanceKK |
|           40 |      698 | 2025-04-27 | Chinggis Warriors | L   | 0.963      | -            | -                | -                | -         |    -4.03 | gas, Marek, Purely, qqGOD, VanceKK |
|           39 |      740 | 2025-04-26 | Rare Atom         | L   | 0.955      | -            | -                | -                | -         |    -1.59 | gas, Marek, Purely, qqGOD, VanceKK |
|           38 |      825 | 2025-04-20 | XDM               | W   | 0.916      | 0.143        | 0.000 (0.000)    | -                | 1 (0.916) |     7.60 | gas, Marek, Purely, qqGOD, VanceKK |
|           37 |      894 | 2025-04-17 | Change The Game   | W   | 0.896      | 0.143        | 0.000 (0.000)    | 0.123 (0.016)    | 1 (0.896) |     9.29 | gas, Marek, Purely, qqGOD, VanceKK |
|           36 |     1070 | 2025-04-09 | Rare Atom         | L   | 0.842      | -            | -                | -                | -         |    -1.12 | gas, Marek, Purely, qqGOD, VanceKK |
|           35 |     1071 | 2025-04-09 | Rare Atom         | L   | 0.842      | -            | -                | -                | -         |    -1.13 | gas, Marek, Purely, qqGOD, VanceKK |
|           34 |     1107 | 2025-04-08 | Chinggis Warriors | W   | 0.837      | 0.417        | 0.050 (0.018)    | 0.691 (0.241)    | 0 (0.000) |    24.12 | gas, Marek, Purely, qqGOD, VanceKK |
|           33 |     1109 | 2025-04-08 | Chinggis Warriors | L   | 0.837      | -            | -                | -                | -         |    -2.06 | gas, Marek, Purely, qqGOD, VanceKK |
|           32 |     1288 | 2025-04-02 | Lynn Vision       | L   | 0.797      | -            | -                | -                | -         |    -1.98 | gas, Marek, Purely, qqGOD, VanceKK |
|           31 |     1296 | 2025-04-02 | Lynn Vision       | L   | 0.796      | -            | -                | -                | -         |    -2.02 | gas, Marek, Purely, qqGOD, VanceKK |
|           30 |     1341 | 2025-04-01 | The Huns          | L   | 0.790      | -            | -                | -                | -         |    -2.79 | gas, Marek, Purely, qqGOD, VanceKK |
|           29 |     1347 | 2025-04-01 | The Huns          | L   | 0.790      | -            | -                | -                | -         |    -2.87 | gas, Marek, Purely, qqGOD, VanceKK |
|           28 |     1528 | 2025-03-28 | Shika             | L   | 0.762      | -            | -                | -                | -         |   -14.64 | gas, Marek, Purely, qqGOD, VanceKK |
|           27 |     1594 | 2025-03-27 | TYLOO             | L   | 0.756      | -            | -                | -                | -         |    -0.72 | gas, Marek, Purely, qqGOD, VanceKK |
|           26 |     1635 | 2025-03-26 | THE               | L   | 0.750      | -            | -                | -                | -         |   -12.48 | gas, Marek, Purely, qqGOD, VanceKK |
|           25 |     1643 | 2025-03-26 | THE               | L   | 0.750      | -            | -                | -                | -         |   -13.32 | gas, Marek, Purely, qqGOD, VanceKK |
|           24 |     1677 | 2025-03-25 | FengDa            | L   | 0.744      | -            | -                | -                | -         |   -12.36 | gas, Marek, Purely, qqGOD, VanceKK |
|           23 |     1687 | 2025-03-25 | FengDa            | W   | 0.743      | 0.417        | 0.003 (0.001)    | 0.283 (0.088)    | 0 (0.000) |    11.22 | gas, Marek, Purely, qqGOD, VanceKK |
|           22 |     1838 | 2025-03-19 | harizma           | W   | 0.704      | 0.417        | 0.000 (0.000)    | 0.112 (0.033)    | 0 (0.000) |     5.31 | gas, Marek, Purely, qqGOD, VanceKK |
|           21 |     1843 | 2025-03-19 | harizma           | W   | 0.703      | 0.417        | -                | 0.112 (0.033)    | 0 (0.000) |     5.56 | gas, Marek, Purely, qqGOD, VanceKK |
|           20 |     2002 | 2025-03-12 | Gods Reign        | W   | 0.657      | 0.417        | 0.006 (0.002)    | 0.274 (0.075)    | 0 (0.000) |    10.89 | gas, Marek, Purely, qqGOD, VanceKK |
|           19 |     2004 | 2025-03-12 | Gods Reign        | W   | 0.657      | 0.417        | 0.006 (0.002)    | 0.274 (0.075)    | 0 (0.000) |    11.54 | gas, Marek, Purely, qqGOD, VanceKK |
|           18 |     2529 | 2025-02-26 | -72c              | L   | 0.564      | -            | -                | -                | -         |    -8.20 | gas, Marek, Purely, qqGOD, VanceKK |
|           17 |     2531 | 2025-02-26 | -72c              | L   | 0.563      | -            | -                | -                | -         |    -8.62 | gas, Marek, Purely, qqGOD, VanceKK |
|           16 |     2581 | 2025-02-25 | NinJa             | L   | 0.555      | -            | -                | -                | -         |    -7.03 | gas, Marek, Purely, qqGOD, VanceKK |
|           15 |     2603 | 2025-02-24 | Shika             | L   | 0.550      | -            | -                | -                | -         |   -11.60 | gas, Marek, Purely, qqGOD, VanceKK |
|           14 |     2990 | 2025-02-09 | Rooster           | L   | 0.455      | -            | -                | -                | -         |    -6.27 | gas, Marek, Purely, qqGOD, VanceKK |
|           13 |     3022 | 2025-02-09 | SemperFi          | L   | 0.449      | -            | -                | -                | -         |    -5.03 | gas, Marek, Purely, qqGOD, VanceKK |
|           12 |     3087 | 2025-02-08 | DXA               | W   | 0.442      | -            | -                | -                | 0 (0.000) |     1.57 | gas, Marek, Purely, qqGOD, VanceKK |
|           11 |     3363 | 2025-01-24 | TYLOO             | L   | 0.344      | -            | -                | -                | -         |    -0.32 | gas, Marek, Purely, qqGOD, VanceKK |
|           10 |     3369 | 2025-01-24 | TYLOO             | L   | 0.344      | -            | -                | -                | -         |    -0.32 | gas, Marek, Purely, qqGOD, VanceKK |
|            9 |     3399 | 2025-01-23 | The QUBE          | W   | 0.337      | 0.417        | -                | 0.124 (0.017)    | 0 (0.000) |     2.31 | gas, Marek, Purely, qqGOD, VanceKK |
|            8 |     3403 | 2025-01-23 | The QUBE          | W   | 0.337      | 0.417        | -                | 0.124 (0.017)    | -         |     2.36 | gas, Marek, Purely, qqGOD, VanceKK |
|            7 |     3430 | 2025-01-22 | NomadS            | L   | 0.330      | -            | -                | -                | -         |    -7.11 | gas, Marek, Purely, qqGOD, VanceKK |
|            6 |     3435 | 2025-01-22 | NomadS            | W   | 0.330      | 0.417        | 0.003 (0.000)    | -                | -         |     3.34 | gas, Marek, Purely, qqGOD, VanceKK |
|            5 |     3463 | 2025-01-21 | NinJa             | L   | 0.324      | -            | -                | -                | -         |    -4.44 | gas, Marek, Purely, qqGOD, VanceKK |
|            4 |     3468 | 2025-01-21 | NinJa             | W   | 0.323      | 0.417        | 0.017 (0.002)    | 0.276 (0.037)    | -         |     5.87 | gas, Marek, Purely, qqGOD, VanceKK |
|            3 |     3901 | 2024-12-04 | ATOX              | L   | 0.003      | -            | -                | -                | -         |    -0.05 | gas, Marek, Purely, qqGOD, VanceKK |
|            2 |     3904 | 2024-12-04 | IHC               | L   | 0.002      | -            | -                | -                | -         |    -0.04 | gas, Marek, Purely, qqGOD, VanceKK |
|            1 |     3905 | 2024-12-03 | NomadS            | W   | 0.002      | 0.333        | 0.021 (0.000)    | -                | -         |     0.04 | gas, Marek, Purely, qqGOD, VanceKK |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($800.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-05-04 |      1.000 | $800.00        | $800.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

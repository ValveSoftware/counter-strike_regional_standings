### Roster Details<br />
Team Name: Atrix<br />
Roster: bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz<br />
Global Rank: [113](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [25]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  886.4<br />
<br />
Final Rank Value (886.4) = Starting Rank Value (884.7) + Head To Head Adjustments (1.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.426[<sup>1</sup>](#table2)
- Bounty Collected: 0.326[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.190[<sup>2</sup>](#table1)

The average of these factors is 0.244<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 884.7
- 400 + ( ( 0.244 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 884.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      529 | 2025-11-29 | MIBR fe       | L   | 0.952      | -            | -                | -                | -         |    -7.54 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|           13 |      554 | 2025-11-28 | NIP Impact    | L   | 0.947      | -            | -                | -                | -         |   -17.46 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|           12 |      558 | 2025-11-28 | MIBR fe       | W   | 0.946      | 0.605        | 0.129 (0.074)    | 0.280 (0.160)    | 1 (0.946) |    22.11 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|           11 |      878 | 2025-11-14 | MIBR fe       | L   | 0.855      | -            | -                | -                | -         |    -6.75 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|           10 |      890 | 2025-11-14 | FURIA fe      | L   | 0.853      | -            | -                | -                | -         |   -15.53 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            9 |      908 | 2025-11-13 | Four Magic fe | W   | 0.847      | 0.384        | 0.008 (0.003)    | 0.102 (0.033)    | 1 (0.847) |     5.14 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            8 |     1643 | 2025-10-24 | Four Magic fe | W   | 0.715      | 0.520        | 0.008 (0.003)    | 0.102 (0.038)    | 0 (0.000) |     4.54 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            7 |     1858 | 2025-10-16 | thekillaz fe  | W   | 0.662      | 0.520        | 0.002 (0.001)    | 0.078 (0.027)    | 0 (0.000) |     4.09 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            6 |     2061 | 2025-10-09 | CAPIVARAS     | W   | 0.615      | 0.520        | 0.002 (0.001)    | 0.012 (0.004)    | 0 (0.000) |     2.05 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            5 |     2453 | 2025-10-01 | Curralzinho   | W   | 0.562      | 0.520        | 0.002 (0.001)    | 0.067 (0.019)    | 0 (0.000) |     3.22 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            4 |     2754 | 2025-09-24 | Dusty Roses   | W   | 0.515      | 0.520        | 0.003 (0.001)    | 0.027 (0.007)    | 0 (0.000) |     3.11 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            3 |     2942 | 2025-09-17 | FURIA fe      | W   | 0.469      | 0.520        | 0.014 (0.004)    | 0.253 (0.062)    | 0 (0.000) |     6.49 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            2 |     3227 | 2025-09-10 | MIBR fe       | L   | 0.422      | -            | -                | -                | -         |    -2.86 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            1 |     3734 | 2025-08-20 | CAPIVARAS     | W   | 0.282      | 0.444        | 0.002 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     1.05 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,314.22)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-30 |      0.960 | $17,000.00     | $16,323.47      |
| 2025-11-16 |      0.867 | $3,451.00      | $2,990.75       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

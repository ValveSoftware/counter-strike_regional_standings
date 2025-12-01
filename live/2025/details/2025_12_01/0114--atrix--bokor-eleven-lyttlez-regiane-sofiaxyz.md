### Roster Details<br />
Team Name: Atrix<br />
Roster: bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz<br />
Global Rank: [114](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [28]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  871.4<br />
<br />
Final Rank Value (871.4) = Starting Rank Value (868.1) + Head To Head Adjustments (3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.408[<sup>1</sup>](#table2)
- Bounty Collected: 0.321[<sup>2</sup>](#table1)
- Opponent Network: 0.052[<sup>2</sup>](#table1)
- LAN Wins: 0.202[<sup>2</sup>](#table1)

The average of these factors is 0.246<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 868.1
- 400 + ( ( 0.246 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 868.1


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
|           14 |       33 | 2025-11-29 | MIBR fe       | L   | 1.000      | -            | -                | -                | -         |    -8.60 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|           13 |       51 | 2025-11-28 | NIP Impact    | L   | 1.000      | -            | -                | -                | -         |   -19.87 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|           12 |       54 | 2025-11-28 | MIBR fe       | W   | 1.000      | 0.605        | 0.102 (0.062)    | 0.310 (0.188)    | 1 (1.000) |    22.49 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|           11 |      331 | 2025-11-14 | MIBR fe       | L   | 1.000      | -            | -                | -                | -         |    -8.80 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|           10 |      341 | 2025-11-14 | FURIA fe      | L   | 1.000      | -            | -                | -                | -         |   -18.20 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            9 |      358 | 2025-11-13 | Four Magic fe | W   | 1.000      | 0.384        | 0.007 (0.003)    | 0.125 (0.048)    | 1 (1.000) |     6.02 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            8 |     1083 | 2025-10-24 | Four Magic fe | W   | 0.948      | 0.520        | 0.007 (0.004)    | 0.125 (0.061)    | 0 (0.000) |     6.04 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            7 |     1298 | 2025-10-16 | thekillaz fe  | W   | 0.895      | 0.520        | 0.002 (0.001)    | 0.107 (0.050)    | 0 (0.000) |     5.70 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            6 |     1501 | 2025-10-09 | CAPIVARAS     | W   | 0.848      | 0.520        | 0.002 (0.001)    | 0.020 (0.009)    | 0 (0.000) |     2.78 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            5 |     1893 | 2025-10-01 | Curralzinho   | W   | 0.795      | 0.520        | 0.002 (0.001)    | 0.088 (0.036)    | 0 (0.000) |     4.54 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            4 |     2194 | 2025-09-24 | Dusty Roses   | W   | 0.748      | 0.520        | 0.003 (0.001)    | 0.034 (0.013)    | 0 (0.000) |     4.53 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            3 |     2382 | 2025-09-17 | FURIA fe      | W   | 0.702      | 0.520        | 0.013 (0.005)    | 0.304 (0.111)    | 0 (0.000) |     9.59 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            2 |     2667 | 2025-09-10 | MIBR fe       | L   | 0.655      | -            | -                | -                | -         |    -4.83 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |
|            1 |     3174 | 2025-08-20 | CAPIVARAS     | W   | 0.515      | 0.444        | 0.002 (0.000)    | 0.020 (0.005)    | 0 (0.000) |     1.97 | bokor, Eleven, LyttleZ, REGIANE, Sofiaxyz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,451.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-30 |      1.000 | $17,000.00     | $17,000.00      |
| 2025-11-16 |      1.000 | $3,451.00      | $3,451.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

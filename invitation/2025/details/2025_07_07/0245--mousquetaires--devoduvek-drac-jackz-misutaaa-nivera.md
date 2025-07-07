### Roster Details<br />
Team Name: Mousquetaires<br />
Roster: devoduvek, drac, JACKZ, misutaaa, Nivera<br />
Global Rank: [245](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [130]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  491.8<br />
<br />
Final Rank Value (491.8) = Starting Rank Value (499.3) + Head To Head Adjustments (-7.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.209[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 499.3
- 400 + ( ( 0.053 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 499.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      529 | 2025-05-23 | FORZE Reload    | L   | 0.899      | -            | -                | -                | -         |   -11.66 | devoduvek, drac, JACKZ, misutaaa, Nivera |
|           11 |      550 | 2025-05-22 | ESC             | L   | 0.892      | -            | -                | -                | -         |    -9.87 | devoduvek, drac, JACKZ, misutaaa, Nivera |
|           10 |      621 | 2025-05-19 | ex-Permitta     | W   | 0.873      | 0.143        | 0.000 (0.000)    | 0.038 (0.005)    | 0 (0.000) |    14.30 | devoduvek, drac, JACKZ, misutaaa, Nivera |
|            9 |     2227 | 2025-03-22 | Lazer Cats      | L   | 0.486      | -            | -                | -                | -         |    -9.91 | Brooxsy, devoduvek, drac, Kursy, Nivera  |
|            8 |     2469 | 2025-03-12 | QMISTRY         | L   | 0.421      | -            | -                | -                | -         |    -4.60 | Brooxsy, devoduvek, drac, JACKZ, Kursy   |
|            7 |     2521 | 2025-03-10 | K27             | W   | 0.407      | 0.372        | 0.001 (0.000)    | 0.043 (0.006)    | 0 (0.000) |     8.00 | Brooxsy, devoduvek, drac, JACKZ, Kursy   |
|            6 |     2641 | 2025-03-08 | 1win            | W   | 0.394      | 0.372        | 0.008 (0.001)    | 0.186 (0.027)    | 0 (0.000) |    10.22 | Brooxsy, devoduvek, drac, JACKZ, Kursy   |
|            5 |     2837 | 2025-03-04 | Insilio         | L   | 0.367      | -            | -                | -                | -         |    -6.29 | Brooxsy, devoduvek, drac, JACKZ, Kursy   |
|            4 |     3265 | 2025-02-17 | Hesta           | L   | 0.267      | -            | -                | -                | -         |    -3.73 | Brooxsy, devoduvek, drac, JACKZ, Kursy   |
|            3 |     3269 | 2025-02-17 | Bad News Eagles | W   | 0.266      | 0.143        | 0.002 (0.000)    | 0.042 (0.002)    | 0 (0.000) |     5.95 | Brooxsy, devoduvek, drac, JACKZ, Kursy   |
|            2 |     3982 | 2025-01-10 | 9 Pandas        | L   | 0.013      | -            | -                | -                | -         |    -0.05 | Brooxsy, devoduvek, drac, JACKZ, Kursy   |
|            1 |     3992 | 2025-01-09 | ECSTATIC        | W   | 0.005      | 0.417        | 0.129 (0.000)    | 1.000 (0.002)    | 0 (0.000) |     0.15 | Brooxsy, devoduvek, drac, JACKZ, Kursy   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

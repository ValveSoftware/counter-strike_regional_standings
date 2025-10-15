### Roster Details<br />
Team Name: Outfit 49<br />
Roster: bezymecc, H0NeST, KmZ<br />
Global Rank: [210](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [118]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  552.9<br />
<br />
Final Rank Value (552.9) = Starting Rank Value (512.1) + Head To Head Adjustments (40.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 512.1
- 400 + ( ( 0.057 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 512.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      657 | 2025-09-12 | Aether       | L   | 1.000      | -            | -                | -                | -         |   -10.47 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            5 |      699 | 2025-09-11 | Marsborne    | L   | 1.000      | -            | -                | -                | -         |    -2.90 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            4 |      796 | 2025-09-09 | Chicken Coop | W   | 1.000      | 0.363        | 0.001 (0.001)    | 0.276 (0.100)    | 0 (0.000) |    23.18 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            3 |      841 | 2025-09-08 | Aether       | W   | 1.000      | 0.363        | 0.003 (0.001)    | 0.305 (0.110)    | 0 (0.000) |    21.48 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            2 |     2209 | 2025-07-11 | M80          | L   | 0.622      | -            | -                | -                | -         |    -0.39 | 6SIX, bezymecc, H0NeST, KmZ, marekiew |
|            1 |     2217 | 2025-07-11 | Mythic       | W   | 0.620      | 0.143        | 0.000 (0.000)    | 0.076 (0.007)    | 0 (0.000) |     9.94 | 6SIX, bezymecc, H0NeST, KmZ, marekiew |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

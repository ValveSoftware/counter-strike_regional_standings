### Roster Details<br />
Team Name: Outfit 49<br />
Roster: bezymecc, H0NeST, KmZ<br />
Global Rank: [228](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [130]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  538.9<br />
<br />
Final Rank Value (538.9) = Starting Rank Value (507.0) + Head To Head Adjustments (31.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.0
- 400 + ( ( 0.057 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 507.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1541 | 2025-09-12 | Aether          | L   | 0.856      | -            | -                | -                | -         |    -9.33 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            5 |     1584 | 2025-09-11 | Marsborne       | L   | 0.849      | -            | -                | -                | -         |    -2.65 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            4 |     1693 | 2025-09-09 | ex-Chicken Coop | W   | 0.835      | 0.363        | 0.003 (0.001)    | 0.315 (0.095)    | 0 (0.000) |    19.55 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            3 |     1740 | 2025-09-08 | Aether          | W   | 0.829      | 0.363        | 0.001 (0.000)    | 0.244 (0.073)    | 0 (0.000) |    17.34 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            2 |     3110 | 2025-07-11 | M80             | L   | 0.435      | -            | -                | -                | -         |    -0.26 | 6SIX, bezymecc, H0NeST, KmZ, marekiew |
|            1 |     3118 | 2025-07-11 | Mythic          | W   | 0.433      | 0.624        | 0.000 (0.000)    | 0.147 (0.040)    | 0 (0.000) |     7.24 | 6SIX, bezymecc, H0NeST, KmZ, marekiew |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: Outfit 49<br />
Roster: bezymecc, H0NeST, KmZ<br />
Global Rank: [272](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [159]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  513.3<br />
<br />
Final Rank Value (513.3) = Starting Rank Value (498.5) + Head To Head Adjustments (14.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.5
- 400 + ( ( 0.050 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 498.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     3122 | 2025-09-12 | Aether    | L   | 0.436      | -            | -                | -                | -         |    -4.26 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            5 |     3165 | 2025-09-11 | Marsborne | L   | 0.429      | -            | -                | -                | -         |    -0.36 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            4 |     3274 | 2025-09-09 | Phoenix   | W   | 0.416      | 0.363        | 0.003 (0.000)    | 0.287 (0.043)    | 0 (0.000) |    10.07 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            3 |     3321 | 2025-09-08 | Aether    | W   | 0.410      | 0.363        | 0.001 (0.000)    | 0.102 (0.015)    | 0 (0.000) |     9.02 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            2 |     4691 | 2025-07-11 | M80       | L   | 0.015      | -            | -                | -                | -         |    -0.00 | 6SIX, bezymecc, H0NeST, KmZ, marekiew |
|            1 |     4699 | 2025-07-11 | Mythic    | W   | 0.014      | 0.624        | 0.002 (0.000)    | 0.208 (0.002)    | 0 (0.000) |     0.32 | 6SIX, bezymecc, H0NeST, KmZ, marekiew |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

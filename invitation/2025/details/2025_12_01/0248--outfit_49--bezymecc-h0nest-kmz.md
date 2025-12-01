### Roster Details<br />
Team Name: Outfit 49<br />
Roster: bezymecc, H0NeST, KmZ<br />
Global Rank: [248](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [143]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  532.2<br />
<br />
Final Rank Value (532.2) = Starting Rank Value (504.7) + Head To Head Adjustments (27.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.7
- 400 + ( ( 0.055 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 504.7


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
|            6 |     2562 | 2025-09-12 | Aether    | L   | 0.669      | -            | -                | -                | -         |    -6.85 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            5 |     2605 | 2025-09-11 | Marsborne | L   | 0.662      | -            | -                | -                | -         |    -0.90 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            4 |     2714 | 2025-09-09 | Phoenix   | W   | 0.649      | 0.363        | 0.003 (0.001)    | 0.282 (0.066)    | 0 (0.000) |    15.81 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            3 |     2761 | 2025-09-08 | Aether    | W   | 0.643      | 0.363        | 0.001 (0.000)    | 0.197 (0.046)    | 0 (0.000) |    13.86 | bezymecc, H0NeST, KmZ, sava9e, zeep   |
|            2 |     4131 | 2025-07-11 | M80       | L   | 0.248      | -            | -                | -                | -         |    -0.06 | 6SIX, bezymecc, H0NeST, KmZ, marekiew |
|            1 |     4139 | 2025-07-11 | Mythic    | W   | 0.247      | 0.624        | 0.002 (0.000)    | 0.261 (0.040)    | 0 (0.000) |     5.68 | 6SIX, bezymecc, H0NeST, KmZ, marekiew |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

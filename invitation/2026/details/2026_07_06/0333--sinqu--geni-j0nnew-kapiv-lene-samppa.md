### Roster Details<br />
Team Name: SINQU<br />
Roster: Geni, J0nneW, KapiV, Lene, Samppa<br />
Global Rank: [333](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [213]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  515.3<br />
<br />
Final Rank Value (515.3) = Starting Rank Value (513.0) + Head To Head Adjustments (2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.011[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.0
- 400 + ( ( 0.060 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 513.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3066 | 2026-03-29 | Strael Bora      | L   | 0.540      | -            | -                | -                | -         |    -3.98 | Geni, J0nneW, KapiV, Lene, Samppa |
|            7 |     3095 | 2026-03-29 | HAVU             | L   | 0.539      | -            | -                | -                | -         |    -2.66 | Geni, J0nneW, KapiV, Lene, Samppa |
|            6 |     3656 | 2026-03-19 | ex-Zero Tenacity | L   | 0.473      | -            | -                | -                | -         |    -2.09 | Geni, J0nneW, KapiV, Lene, Samppa |
|            5 |     3704 | 2026-03-18 | GenOne           | W   | 0.466      | 0.384        | 0.010 (0.002)    | 1.000 (0.179)    | 0 (0.000) |    12.49 | Geni, J0nneW, KapiV, Lene, Samppa |
|            4 |     3777 | 2026-03-16 | Leo              | L   | 0.454      | -            | -                | -                | -         |    -2.49 | Geni, J0nneW, KapiV, Lene, Samppa |
|            3 |     5990 | 2026-01-23 | STATE            | L   | 0.109      | -            | -                | -                | -         |    -0.07 | Geni, J0nneW, KapiV, Lene, Samppa |
|            2 |     5995 | 2026-01-23 | Alliance         | L   | 0.109      | -            | -                | -                | -         |    -0.02 | Geni, J0nneW, KapiV, Lene, Samppa |
|            1 |     5998 | 2026-01-23 | Sidequest        | W   | 0.108      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.108) |     1.18 | Geni, J0nneW, KapiV, Lene, Samppa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: Diamant<br />
Roster: Destro, jernejj, jkXy, JuN1, Libra<br />
Global Rank: [339](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [202]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  454.6<br />
<br />
Final Rank Value (454.6) = Starting Rank Value (439.3) + Head To Head Adjustments (15.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.075[<sup>2</sup>](#table1)

The average of these factors is 0.021<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 439.3
- 400 + ( ( 0.021 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 439.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1697 | 2026-03-24 | rottweilers | L   | 0.928      | -            | -                | -                | -         |    -6.91 | Destro, jernejj, jkXy, JuN1, Libra |
|            5 |     1833 | 2026-03-22 | FIGHTERS    | W   | 0.915      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    11.96 | Destro, jernejj, jkXy, JuN1, Libra |
|            4 |     1959 | 2026-03-20 | rottweilers | L   | 0.900      | -            | -                | -                | -         |    -7.39 | Destro, jernejj, jkXy, JuN1, Libra |
|            3 |     3103 | 2026-02-24 | aimclub     | L   | 0.741      | -            | -                | -                | -         |    -2.01 | Destro, jernejj, jkXy, JuN1, Libra |
|            2 |     3126 | 2026-02-24 | Nexus       | L   | 0.739      | -            | -                | -                | -         |    -1.82 | Destro, jernejj, jkXy, JuN1, Libra |
|            1 |     3145 | 2026-02-24 | aimclub     | W   | 0.738      | 0.354        | 0.000 (0.000)    | 0.381 (0.100)    | 1 (0.738) |    21.48 | Destro, jernejj, jkXy, JuN1, Libra |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

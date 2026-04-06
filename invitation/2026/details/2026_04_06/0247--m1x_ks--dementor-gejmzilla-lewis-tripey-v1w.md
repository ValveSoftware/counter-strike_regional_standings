### Roster Details<br />
Team Name: M1X KS<br />
Roster: Dementor, gejmzilla, Lewis, tripey, v1w<br />
Global Rank: [247](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [159]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  653.0<br />
<br />
Final Rank Value (653.0) = Starting Rank Value (630.2) + Head To Head Adjustments (22.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.093[<sup>2</sup>](#table1)

The average of these factors is 0.118<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 630.2
- 400 + ( ( 0.118 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 630.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2013 | 2026-02-24 | HYPERSPIRIT       | L   | 0.928      | -            | -                | -                | -         |    -3.92 | Dementor, gejmzilla, Lewis, tripey, v1w |
|            4 |     2019 | 2026-02-24 | Insiders          | W   | 0.927      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.927) |     5.60 | Dementor, gejmzilla, Lewis, tripey, v1w |
|            3 |     2037 | 2026-02-24 | HYPERSPIRIT       | L   | 0.926      | -            | -                | -                | -         |    -3.84 | Dementor, gejmzilla, Lewis, tripey, v1w |
|            2 |     2835 | 2026-02-07 | Ninjas in Pyjamas | L   | 0.812      | -            | -                | -                | -         |    -0.31 | Dementor, gejmzilla, Lewis, tripey, v1w |
|            1 |     2875 | 2026-02-06 | 3DMAX             | W   | 0.806      | 0.769        | 0.215 (0.133)    | 0.492 (0.304)    | 0 (0.000) |    25.23 | Dementor, gejmzilla, Lewis, tripey, v1w |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

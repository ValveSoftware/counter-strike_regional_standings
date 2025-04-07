### Roster Details<br />
Team Name: Aether<br />
Roster: denz, Izik, MJB, Pr0mise, SolGoat<br />
Global Rank: [278](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [90]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  392.2<br />
<br />
Final Rank Value (392.2) = Starting Rank Value (400.0) + Head To Head Adjustments (-7.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 400.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      143 | 2025-03-29 | Vagrants        | L   | 1.000      | -            | -                | -                | -         |    -8.80 | denz, Izik, MJB, Pr0mise, SolGoat   |
|            4 |      200 | 2025-03-28 | seoul           | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    14.80 | denz, Izik, MJB, Pr0mise, SolGoat   |
|            3 |      260 | 2025-03-27 | SUPER EVIL GANG | L   | 1.000      | -            | -                | -                | -         |    -7.01 | AtomiK, denz, MJB, Pr0mise, SolGoat |
|            2 |      790 | 2025-03-06 | Aetheris        | L   | 0.988      | -            | -                | -                | -         |    -5.90 | AtomiK, denz, MJB, Pr0mise, SolGoat |
|            1 |      829 | 2025-03-05 | Complexity      | L   | 0.981      | -            | -                | -                | -         |    -0.93 | AtomiK, denz, MJB, Pr0mise, SolGoat |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

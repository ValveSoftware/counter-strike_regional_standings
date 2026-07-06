### Roster Details<br />
Team Name: Basement Bobs<br />
Roster: DALIEN, levantino, MadeInRed, Pedrinho2011, Uzman<br />
Global Rank: [308](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [196]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  565.0<br />
<br />
Final Rank Value (565.0) = Starting Rank Value (523.7) + Head To Head Adjustments (41.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.066<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 523.7
- 400 + ( ( 0.066 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 523.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2289 | 2026-04-11 | Metizport       | L   | 0.626      | -            | -                | -                | -         |    -1.11 | DALIEN, levantino, MadeInRed, Pedrinho2011, Uzman |
|            5 |     2431 | 2026-04-06 | Rune Eaters     | W   | 0.594      | 0.371        | 0.010 (0.002)    | 0.680 (0.150)    | 0 (0.000) |    16.54 | DALIEN, levantino, MadeInRed, Pedrinho2011, Uzman |
|            4 |     2733 | 2026-04-02 | EAC             | L   | 0.567      | -            | -                | -                | -         |    -0.61 | DALIEN, levantino, MadeInRed, Pedrinho2011, Uzman |
|            3 |     3093 | 2026-03-29 | Rune Eaters     | W   | 0.539      | 0.371        | 0.010 (0.002)    | 0.680 (0.136)    | 0 (0.000) |    15.75 | DALIEN, levantino, MadeInRed, Pedrinho2011, Uzman |
|            2 |     3266 | 2026-03-26 | Vexar           | W   | 0.520      | 0.333        | 0.002 (0.000)    | 0.243 (0.042)    | 0 (0.000) |    11.15 | DALIEN, levantino, MadeInRed, Pedrinho2011, Uzman |
|            1 |     3433 | 2026-03-23 | Nuclear TigeRES | L   | 0.501      | -            | -                | -                | -         |    -0.36 | DALIEN, levantino, MadeInRed, Pedrinho2011, Uzman |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

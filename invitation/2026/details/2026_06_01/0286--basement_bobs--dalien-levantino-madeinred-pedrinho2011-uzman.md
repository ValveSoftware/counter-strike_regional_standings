### Roster Details<br />
Team Name: Basement Bobs<br />
Roster: DALIEN, levantino, MadeInRed, Pedrinho2011, Uzman<br />
Global Rank: [286](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [182]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  586.3<br />
<br />
Final Rank Value (586.3) = Starting Rank Value (530.5) + Head To Head Adjustments (55.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.047[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 530.5
- 400 + ( ( 0.068 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 530.5


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
|            6 |     1628 | 2026-04-11 | Metizport       | L   | 0.859      | -            | -                | -                | -         |    -2.11 | DALIEN, levantino, MadeInRed, Pedrinho2011, Uzman |
|            5 |     1770 | 2026-04-06 | Rune Eaters     | W   | 0.827      | 0.371        | 0.006 (0.002)    | 0.688 (0.211)    | 0 (0.000) |    21.49 | DALIEN, levantino, MadeInRed, Pedrinho2011, Uzman |
|            4 |     2072 | 2026-04-02 | EAC             | L   | 0.800      | -            | -                | -                | -         |    -0.81 | DALIEN, levantino, MadeInRed, Pedrinho2011, Uzman |
|            3 |     2432 | 2026-03-29 | Rune Eaters     | W   | 0.772      | 0.371        | 0.006 (0.002)    | 0.688 (0.197)    | 0 (0.000) |    21.70 | DALIEN, levantino, MadeInRed, Pedrinho2011, Uzman |
|            2 |     2605 | 2026-03-26 | Vexar           | W   | 0.753      | 0.333        | 0.002 (0.000)    | 0.253 (0.063)    | 0 (0.000) |    15.97 | DALIEN, levantino, MadeInRed, Pedrinho2011, Uzman |
|            1 |     2772 | 2026-03-23 | Nuclear TigeRES | L   | 0.734      | -            | -                | -                | -         |    -0.39 | DALIEN, levantino, MadeInRed, Pedrinho2011, Uzman |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

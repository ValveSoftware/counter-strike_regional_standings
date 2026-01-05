### Roster Details<br />
Team Name: ASTRAL<br />
Roster: ASTR, meowpop, Neqy, r1ch, RaY5ive<br />
Global Rank: [89](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [63]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  988.8<br />
<br />
Final Rank Value (988.8) = Starting Rank Value (987.3) + Head To Head Adjustments (1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.836[<sup>2</sup>](#table1)

The average of these factors is 0.296<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 987.3
- 400 + ( ( 0.296 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 987.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |        0 | 2026-01-05 | OlyBet            | L   | 1.000      | -            | -                | -                | -         |   -19.34 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           13 |        3 | 2026-01-05 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |   -10.98 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           12 |       31 | 2026-01-04 | MINLATE           | W   | 1.000      | 0.314        | 0.004 (0.001)    | 0.225 (0.070)    | 1 (1.000) |    10.76 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           11 |       36 | 2026-01-04 | Friendly Campers  | W   | 1.000      | 0.314        | 0.109 (0.034)    | 0.932 (0.293)    | 1 (1.000) |    27.72 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           10 |       39 | 2026-01-04 | Fingers Crossed   | W   | 1.000      | 0.314        | 0.000 (0.000)    | 0.083 (0.026)    | 1 (1.000) |     2.05 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            9 |       43 | 2026-01-04 | SINQU             | W   | 1.000      | 0.314        | 0.000 (0.000)    | 0.041 (0.013)    | 1 (1.000) |     2.98 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            8 |       45 | 2026-01-04 | AaB               | W   | 1.000      | 0.314        | 0.000 (0.000)    | 0.352 (0.110)    | 1 (1.000) |    10.39 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            7 |      105 | 2025-12-21 | Sharks            | L   | 1.000      | -            | -                | -                | -         |    -4.22 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            6 |      118 | 2025-12-20 | USA               | W   | 1.000      | 0.309        | 0.000 (0.000)    | 0.041 (0.013)    | 1 (1.000) |     1.77 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            5 |      122 | 2025-12-20 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -1.40 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            4 |      127 | 2025-12-20 | Underground       | W   | 1.000      | 0.309        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     1.25 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            3 |      762 | 2025-11-20 | AM                | L   | 0.894      | -            | -                | -                | -         |    -8.16 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            2 |      770 | 2025-11-20 | Lazer Cats        | W   | 0.894      | 0.339        | 0.001 (0.000)    | 0.197 (0.060)    | 1 (0.894) |    10.49 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            1 |      793 | 2025-11-20 | Tricked           | L   | 0.891      | -            | -                | -                | -         |   -21.73 | ASTR, meowpop, Neqy, r1ch, RaY5ive |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

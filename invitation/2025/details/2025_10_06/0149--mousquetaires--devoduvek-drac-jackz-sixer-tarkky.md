### Roster Details<br />
Team Name: Mousquetaires<br />
Roster: devoduvek, drac, JACKZ, SIXER, Tarkky<br />
Global Rank: [149](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [92]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  703.9<br />
<br />
Final Rank Value (703.9) = Starting Rank Value (687.7) + Head To Head Adjustments (16.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.211[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.138[<sup>2</sup>](#table1)

The average of these factors is 0.147<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.7
- 400 + ( ( 0.147 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 687.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |       99 | 2025-09-30 | KHAN             | L   | 1.000      | -            | -                | -                | -         |   -10.73 | devoduvek, drac, JACKZ, Kyojin, Tarkky   |
|           16 |      131 | 2025-09-29 | Leo              | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.324 (0.046)    | 0 (0.000) |    14.21 | devoduvek, drac, JACKZ, Kyojin, Tarkky   |
|           15 |      156 | 2025-09-28 | ALGO             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.243 (0.035)    | 0 (0.000) |    13.65 | devoduvek, drac, JACKZ, Kyojin, Tarkky   |
|           14 |      228 | 2025-09-27 | ARCRED           | W   | 1.000      | 0.143        | 0.010 (0.001)    | 0.716 (0.102)    | 0 (0.000) |    25.02 | devoduvek, drac, JACKZ, Kyojin, Tarkky   |
|           13 |      269 | 2025-09-26 | ALGO             | L   | 1.000      | -            | -                | -                | -         |   -16.05 | devoduvek, drac, JACKZ, rain240, Tarkky  |
|           12 |      467 | 2025-09-18 | KHAN             | L   | 1.000      | -            | -                | -                | -         |   -11.04 | devoduvek, drac, JACKZ, SIXER, Tarkky    |
|           11 |      576 | 2025-09-14 | Square Sausages  | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.21 | devoduvek, drac, JACKZ, SIXER, Tarkky    |
|           10 |      648 | 2025-09-13 | ALGO             | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.243 (0.093)    | 0 (0.000) |    14.68 | devoduvek, drac, JACKZ, SIXER, Tarkky    |
|            9 |      966 | 2025-09-04 | AaB              | L   | 0.987      | -            | -                | -                | -         |    -6.08 | devoduvek, drac, JACKZ, SIXER, Tarkky    |
|            8 |     1020 | 2025-08-31 | kONO             | L   | 0.958      | -            | -                | -                | -         |   -11.21 | devoduvek, drac, JACKZ, SIXER, Tarkky    |
|            7 |     1146 | 2025-08-27 | 1win             | L   | 0.932      | -            | -                | -                | -         |    -8.15 | devoduvek, Djoko, drac, JACKZ, SIXER     |
|            6 |     2009 | 2025-07-19 | Alliance         | L   | 0.674      | -            | -                | -                | -         |    -2.07 | devoduvek, drac, JACKZ, misutaaa, SIXER  |
|            5 |     2022 | 2025-07-19 | dag love fatties | W   | 0.673      | 0.301        | 0.000 (0.000)    | 0.028 (0.006)    | 1 (0.673) |     6.37 | devoduvek, drac, JACKZ, misutaaa, SIXER  |
|            4 |     2026 | 2025-07-19 | Glitchtech       | W   | 0.672      | 0.301        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.672) |     3.48 | devoduvek, drac, JACKZ, misutaaa, SIXER  |
|            3 |     2877 | 2025-05-23 | FORZE Reload     | L   | 0.293      | -            | -                | -                | -         |    -2.88 | devoduvek, drac, JACKZ, misutaaa, Nivera |
|            2 |     2898 | 2025-05-22 | ESC              | L   | 0.286      | -            | -                | -                | -         |    -0.48 | devoduvek, drac, JACKZ, misutaaa, Nivera |
|            1 |     2969 | 2025-05-19 | ex-Permitta      | W   | 0.267      | 0.384        | 0.000 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     2.29 | devoduvek, drac, JACKZ, misutaaa, Nivera |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($69.31)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-20 |      0.680 | $102.00        | $69.31          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

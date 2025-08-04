### Roster Details<br />
Team Name: paiN Academy<br />
Roster: deemO, futoi, Markz, Tatu, tsug<br />
Global Rank: [256](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [84]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  493.8<br />
<br />
Final Rank Value (493.8) = Starting Rank Value (491.5) + Head To Head Adjustments (2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.189[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 491.5
- 400 + ( ( 0.048 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 491.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       73 | 2025-07-27 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |    -7.05 | deemO, futoi, Markz, Tatu, tsug   |
|            7 |     3108 | 2025-03-09 | Sharks         | L   | 0.213      | -            | -                | -                | -         |    -0.54 | deemO, legy, Markz, Tatu, tsug    |
|            6 |     3294 | 2025-03-06 | Players        | W   | 0.195      | 0.371        | 0.001 (0.000)    | 0.213 (0.015)    | 0 (0.000) |     4.36 | deemO, legy, Markz, Tatu, tsug    |
|            5 |     3334 | 2025-03-05 | Yawara         | W   | 0.189      | 0.371        | 0.003 (0.000)    | 0.144 (0.010)    | 0 (0.000) |     4.34 | deemO, legy, Markz, Tatu, tsug    |
|            4 |     3385 | 2025-03-03 | UNO MILLE      | L   | 0.174      | -            | -                | -                | -         |    -1.66 | deemO, legy, Markz, Tatu, tsug    |
|            3 |     3454 | 2025-02-28 | GameHunters    | W   | 0.156      | 0.371        | 0.004 (0.000)    | 0.366 (0.021)    | 0 (0.000) |     4.16 | deemO, legy, Markz, Tatu, tsug    |
|            2 |     3468 | 2025-02-27 | ShindeN        | L   | 0.150      | -            | -                | -                | -         |    -1.24 | deemO, legy, Markz, Tatu, tsug    |
|            1 |     4097 | 2025-02-07 | KRÜ            | L   | 0.015      | -            | -                | -                | -         |    -0.10 | deemO, legy, Markz, PremiuM, Tatu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: FengDa<br />
Roster: 3gl, afufu, p5p, Trash, zy<br />
Global Rank: [160](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [19]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  843.8<br />
<br />
Final Rank Value (843.8) = Starting Rank Value (764.0) + Head To Head Adjustments (79.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.348[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.108[<sup>2</sup>](#table1)

The average of these factors is 0.186<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 764.0
- 400 + ( ( 0.186 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 764.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      499 | 2026-03-27 | BMZ            | W   | 1.000      | 0.333        | 0.012 (0.004)    | 0.275 (0.092)    | 0 (0.000) |    23.41 | 3gl, afufu, Marek, p5p, Trash    |
|           14 |      526 | 2026-03-26 | Alter Ego      | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.214 (0.071)    | 0 (0.000) |    17.48 | 3gl, afufu, Marek, p5p, Trash    |
|           13 |      580 | 2026-03-25 | BMZ            | L   | 1.000      | -            | -                | -                | -         |    -7.02 | 3gl, afufu, Marek, p5p, Trash    |
|           12 |      711 | 2026-03-23 | BORING PLAYERS | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.134 (0.045)    | 0 (0.000) |    12.67 | 3gl, afufu, p5p, Trash, zy       |
|           11 |      811 | 2026-03-21 | NSN            | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.034 (0.011)    | 0 (0.000) |     6.41 | 3gl, afufu, p5p, Trash, zy       |
|           10 |      865 | 2026-03-20 | The QUBE       | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.217 (0.072)    | 0 (0.000) |    18.25 | 3gl, afufu, p5p, Trash, zy       |
|            9 |     1289 | 2026-03-10 | FlyQuest       | L   | 1.000      | -            | -                | -                | -         |    -1.69 | 3gl, afufu, p5p, Trash, zy       |
|            8 |     1332 | 2026-03-10 | 100RA          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.36 | 3gl, afufu, p5p, Trash, zy       |
|            7 |     1398 | 2026-03-09 | TYLOO          | L   | 1.000      | -            | -                | -                | -         |    -0.66 | 3gl, afufu, p5p, Trash, zy       |
|            6 |     2870 | 2026-02-06 | TYLOO          | L   | 0.806      | -            | -                | -                | -         |    -0.57 | 3gl, Biuckmt, p5p, salmon, Trash |
|            5 |     3416 | 2026-01-18 | BMZ            | L   | 0.684      | -            | -                | -                | -         |    -4.20 | 3gl, Biuckmt, p5p, salmon, Trash |
|            4 |     3759 | 2025-12-30 | Rare Atom      | L   | 0.551      | -            | -                | -                | -         |    -1.40 | 3gl, p5p, salmon, Trash, x9      |
|            3 |     3760 | 2025-12-29 | Just Swing     | W   | 0.546      | 0.368        | 0.003 (0.001)    | 0.145 (0.029)    | 1 (0.546) |     7.95 | 3gl, p5p, salmon, Trash, x9      |
|            2 |     3765 | 2025-12-28 | Last Bullet    | W   | 0.538      | 0.368        | 0.008 (0.002)    | 0.185 (0.037)    | 1 (0.538) |     9.47 | 3gl, p5p, salmon, Trash, x9      |
|            1 |     3766 | 2025-12-27 | Morningstar    | L   | 0.534      | -            | -                | -                | -         |    -3.60 | 3gl, p5p, salmon, Trash, x9      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,115.42)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-27 |      1.000 | $5,000.00      | $5,000.00       |
| 2025-12-30 |      0.553 | $2,018.00      | $1,115.42       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

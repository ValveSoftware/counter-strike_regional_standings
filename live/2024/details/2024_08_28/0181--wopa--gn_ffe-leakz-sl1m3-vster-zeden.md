### Roster Details<br />
Team Name: WOPA<br />
Roster: Gnøffe, leakz, sL1m3, Vster, zEden<br />
Global Rank: [181](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [117]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  642.0<br />
<br />
Final Rank Value (642.0) = Starting Rank Value (652.1) + Head To Head Adjustments (-10.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.246[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 652.1
- 400 + ( ( 0.127 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 652.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      379 | 2024-08-20 | Grannys Knockers | L   | 1.000      | -            | -                | -                | -         |   -12.11 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           13 |      414 | 2024-08-19 | ALTERNATE aTTaX  | L   | 1.000      | -            | -                | -                | -         |    -8.82 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|           12 |     1337 | 2024-07-21 | Sampi            | L   | 0.947      | -            | -                | -                | -         |    -6.86 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           11 |     1423 | 2024-07-19 | VP.Prodigy       | W   | 0.932      | 0.435        | 0.023 (0.009)    | 0.274 (0.111)    | 0 (0.000) |    21.46 | Gnøffe, leakz, sL1m3, Topa, zEden   |
|           10 |     1550 | 2024-07-17 | GUN5             | L   | 0.918      | -            | -                | -                | -         |    -4.28 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            9 |     1649 | 2024-07-15 | Passion UA       | L   | 0.905      | -            | -                | -                | -         |    -3.16 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            8 |     1854 | 2024-06-16 | FLuffy Gangsters | W   | 0.713      | 0.143        | 0.000 (0.000)    | 0.249 (0.025)    | 0 (0.000) |     9.95 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            7 |     1981 | 2024-06-12 | The Prodigies    | W   | 0.688      | 0.143        | 0.000 (0.000)    | 0.068 (0.007)    | 0 (0.000) |     8.51 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            6 |     1993 | 2024-06-12 | CPH Wolves       | L   | 0.686      | -            | -                | -                | -         |    -6.68 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            5 |     2002 | 2024-06-11 | ADEPTS           | W   | 0.681      | 0.143        | 0.002 (0.000)    | 0.019 (0.002)    | 0 (0.000) |    10.86 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            4 |     2466 | 2024-06-01 | Illuminar        | L   | 0.611      | -            | -                | -                | -         |   -12.44 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            3 |     2860 | 2024-05-17 | LEON             | L   | 0.513      | -            | -                | -                | -         |    -7.60 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            2 |     3010 | 2024-05-14 | Secret           | W   | 0.492      | 0.143        | 0.000 (0.000)    | 0.031 (0.002)    | 0 (0.000) |     5.06 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            1 |     3025 | 2024-05-13 | VP.Prodigy       | L   | 0.487      | -            | -                | -                | -         |    -3.94 | brzer, Gnøffe, leakz, LUMSEN, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($247.34)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

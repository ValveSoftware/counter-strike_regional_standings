### Roster Details<br />
Team Name: WOPA<br />
Roster: Gnøffe, leakz, sL1m3, Vster, zEden<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [175](../standings_global.md)<br />
Regional Rank: [111]( ../standings_europe.md)<br />
Final Rank Value:  651.1<br />
<br />
Final Rank Value (651.1) = Starting Rank Value (643.1) + Head To Head Adjustments (8.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 643.1
- 400 + ( ( 0.113 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 643.1


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
|           10 |       17 | 2024-07-17 | GUN5             | L   | 1.000      | -            | -                | -                | -         |    -4.20 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            9 |      116 | 2024-07-15 | Passion UA       | L   | 1.000      | -            | -                | -                | -         |    -3.52 | Gnøffe, leakz, sL1m3, Vster, zEden  |
|            8 |      321 | 2024-06-16 | FLuffy Gangsters | W   | 0.994      | 0.143        | 0.000 (0.000)    | 0.160 (0.023)    | 0 (0.000) |    14.58 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            7 |      448 | 2024-06-12 | The Prodigies    | W   | 0.968      | 0.143        | 0.000 (0.000)    | 0.113 (0.016)    | 0 (0.000) |    13.93 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            6 |      460 | 2024-06-12 | CPH Wolves       | L   | 0.967      | -            | -                | -                | -         |   -10.47 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            5 |      469 | 2024-06-11 | ADEPTS           | W   | 0.961      | 0.143        | 0.003 (0.000)    | 0.033 (0.005)    | 0 (0.000) |    17.83 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            4 |      933 | 2024-06-01 | Illuminar        | L   | 0.892      | -            | -                | -                | -         |   -15.98 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            3 |     1327 | 2024-05-17 | LEON             | L   | 0.793      | -            | -                | -                | -         |    -9.64 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            2 |     1477 | 2024-05-14 | Secret           | W   | 0.772      | 0.143        | 0.000 (0.000)    | 0.085 (0.009)    | 0 (0.000) |     9.77 | brzer, Gnøffe, leakz, LUMSEN, Vster |
|            1 |     1492 | 2024-05-13 | VP.Prodigy       | L   | 0.767      | -            | -                | -                | -         |    -4.30 | brzer, Gnøffe, leakz, LUMSEN, Vster |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($348.19)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

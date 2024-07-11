### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: bobeksde, jocab, MisteM, Silence, xKacpersky<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [114](../standings_global.md)<br />
Regional Rank: [78]( ../standings_europe.md)<br />
Final Rank Value:  832.4<br />
<br />
Final Rank Value (832.4) = Starting Rank Value (807.3) + Head To Head Adjustments (25.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.383[<sup>1</sup>](#table2)
- Bounty Collected: 0.347[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.193<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 807.3
- 400 + ( ( 0.193 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 807.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     1794 | 2024-04-21 | Romania         | L   | 0.661      | -            | -                | -                | -         |    -9.04 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           15 |     1818 | 2024-04-20 | Passion UA      | L   | 0.654      | -            | -                | -                | -         |    -6.50 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           14 |     1902 | 2024-04-18 | Romania         | W   | 0.641      | 0.500        | 0.011 (0.003)    | 0.375 (0.120)    | 0 (0.000) |    11.36 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           13 |     2248 | 2024-04-07 | 3DMAX           | L   | 0.566      | -            | -                | -                | -         |    -1.72 | BluePho3nix, jocab, MisteM, Silence, xKacpersky |
|           12 |     2834 | 2024-03-10 | 500             | W   | 0.380      | 0.358        | 0.001 (0.000)    | 0.191 (0.026)    | 0 (0.000) |     5.00 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           11 |     2860 | 2024-03-09 | AURA            | W   | 0.372      | 0.143        | 0.000 (0.000)    | 0.023 (0.001)    | 0 (0.000) |     1.78 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           10 |     2933 | 2024-03-06 | HEROIC          | L   | 0.354      | -            | -                | -                | -         |    -0.06 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            9 |     2967 | 2024-03-05 | fnatic          | L   | 0.347      | -            | -                | -                | -         |    -0.17 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            8 |     2980 | 2024-03-05 | Permitta        | L   | 0.346      | -            | -                | -                | -         |    -3.52 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            7 |     2991 | 2024-03-04 | Aurora          | W   | 0.340      | 0.500        | 0.518 (0.088)    | 0.853 (0.145)    | 0 (0.000) |    10.60 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            6 |     3008 | 2024-03-03 | BIG             | W   | 0.334      | 0.500        | 0.215 (0.036)    | 0.405 (0.068)    | 0 (0.000) |    10.14 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            5 |     3062 | 2024-03-01 | BLEED           | L   | 0.320      | -            | -                | -                | -         |    -0.42 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            4 |     3075 | 2024-02-29 | Zero Tenacity   | L   | 0.313      | -            | -                | -                | -         |    -1.66 | BluePho3nix, jocab, MisteM, REZ, Silence        |
|            3 |     3310 | 2024-02-18 | ALTERNATE aTTaX | W   | 0.241      | 0.358        | 0.050 (0.004)    | 0.577 (0.050)    | 0 (0.000) |     6.08 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            2 |     3485 | 2024-02-11 | Portugal        | W   | 0.193      | 0.358        | 0.006 (0.000)    | 0.175 (0.012)    | 0 (0.000) |     2.57 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            1 |     3591 | 2024-02-03 | ex-Anonymo      | W   | 0.140      | 0.358        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.61 | BluePho3nix, jocab, maxster, MisteM, Silence    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,323.10)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-10 |      0.381 | $5,000.00      | $1,904.96       |
| 2024-03-06 |      0.353 | $12,500.00     | $4,418.14       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

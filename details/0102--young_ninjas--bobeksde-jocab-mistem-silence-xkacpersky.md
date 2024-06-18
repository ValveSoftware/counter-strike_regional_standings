### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: bobeksde, jocab, MisteM, Silence, xKacpersky<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [102](../standings_global.md)<br />
Regional Rank: [73]( ../standings_europe.md)<br />
Final Rank Value:  858.4<br />
<br />
Final Rank Value (858.4) = Starting Rank Value (822.1) + Head To Head Adjustments (36.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.397[<sup>1</sup>](#table2)
- Bounty Collected: 0.370[<sup>2</sup>](#table1)
- Opponent Network: 0.065[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 822.1
- 400 + ( ( 0.208 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 822.1


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
|           16 |     1660 | 2024-04-21 | Nexus           | L   | 0.816      | -            | -                | -                | -         |   -11.37 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           15 |     1684 | 2024-04-20 | Passion UA      | L   | 0.810      | -            | -                | -                | -         |    -9.10 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           14 |     1768 | 2024-04-18 | Nexus           | W   | 0.796      | 0.500        | 0.012 (0.005)    | 0.397 (0.158)    | 0 (0.000) |    13.76 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           13 |     2114 | 2024-04-07 | 3DMAX           | L   | 0.721      | -            | -                | -                | -         |    -2.68 | BluePho3nix, jocab, MisteM, Silence, xKacpersky |
|           12 |     2701 | 2024-03-10 | 500             | W   | 0.535      | 0.358        | 0.001 (0.000)    | 0.292 (0.056)    | 0 (0.000) |     6.97 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           11 |     2727 | 2024-03-09 | AURA            | W   | 0.528      | 0.143        | 0.000 (0.000)    | 0.031 (0.002)    | 0 (0.000) |     2.24 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           10 |     2800 | 2024-03-06 | HEROIC          | L   | 0.509      | -            | -                | -                | -         |    -0.09 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            9 |     2834 | 2024-03-05 | fnatic          | L   | 0.503      | -            | -                | -                | -         |    -0.40 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            8 |     2847 | 2024-03-05 | Permitta        | L   | 0.502      | -            | -                | -                | -         |    -5.79 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            7 |     2858 | 2024-03-04 | Aurora          | W   | 0.495      | 0.500        | 0.526 (0.130)    | 0.874 (0.217)    | 0 (0.000) |    15.40 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            6 |     2875 | 2024-03-03 | BIG             | W   | 0.490      | 0.500        | 0.225 (0.055)    | 0.433 (0.106)    | 0 (0.000) |    14.87 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            5 |     2929 | 2024-03-01 | BLEED           | L   | 0.476      | -            | -                | -                | -         |    -0.72 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            4 |     2942 | 2024-02-29 | Zero Tenacity   | L   | 0.468      | -            | -                | -                | -         |    -2.92 | BluePho3nix, jocab, MisteM, REZ, Silence        |
|            3 |     3177 | 2024-02-18 | ALTERNATE aTTaX | W   | 0.397      | 0.358        | 0.046 (0.007)    | 0.573 (0.081)    | 0 (0.000) |     9.44 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            2 |     3352 | 2024-02-11 | esmagaB         | W   | 0.349      | 0.358        | 0.007 (0.001)    | 0.176 (0.022)    | 0 (0.000) |     4.53 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            1 |     3458 | 2024-02-03 | ex-Anonymo      | W   | 0.296      | 0.358        | 0.000 (0.000)    | 0.027 (0.003)    | 0 (0.000) |     2.15 | BluePho3nix, jocab, maxster, MisteM, Silence    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,047.38)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-10 |      0.537 | $5,000.00      | $2,683.33       |
| 2024-03-06 |      0.509 | $12,500.00     | $6,364.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

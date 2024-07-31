### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: BluePho3nix, jocab, MisteM, Silence, xKacpersky<br />
Global Rank: [130](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [91]( ../standings_europe.md)<br />
<br />
Final Rank Value:  769.6<br />
<br />
Final Rank Value (769.6) = Starting Rank Value (757.6) + Head To Head Adjustments (12.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.343[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.173<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 757.6
- 400 + ( ( 0.173 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 757.6


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
|           19 |      589 | 2024-07-16 | Johnny Speeds   | L   | 1.000      | -            | -                | -                | -         |    -2.18 | BluePho3nix, jocab, MisteM, Silence, xKacpersky |
|           18 |     2488 | 2024-04-21 | Nexus           | L   | 0.527      | -            | -                | -                | -         |    -6.40 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           17 |     2512 | 2024-04-20 | Passion UA      | L   | 0.520      | -            | -                | -                | -         |    -3.27 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           16 |     2596 | 2024-04-18 | Nexus           | W   | 0.507      | 0.500        | 0.014 (0.004)    | 0.465 (0.118)    | 0 (0.000) |     9.84 | bobeksde, jocab, MisteM, Silence, xKacpersky    |
|           15 |     2942 | 2024-04-07 | 3DMAX           | L   | 0.432      | -            | -                | -                | -         |    -0.09 | BluePho3nix, jocab, MisteM, Silence, xKacpersky |
|           14 |     3424 | 2024-03-14 | ex-sYnck        | L   | 0.271      | -            | -                | -                | -         |    -7.05 | BluePho3nix, dex, maxster, MisteM, Silence      |
|           13 |     3528 | 2024-03-10 | 500             | W   | 0.246      | 0.358        | 0.001 (0.000)    | 0.106 (0.009)    | 0 (0.000) |     3.34 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           12 |     3554 | 2024-03-09 | AURA            | W   | 0.238      | 0.143        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     1.35 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           11 |     3627 | 2024-03-06 | HEROIC          | L   | 0.219      | -            | -                | -                | -         |    -0.07 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|           10 |     3661 | 2024-03-05 | fnatic          | L   | 0.213      | -            | -                | -                | -         |    -0.08 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            9 |     3674 | 2024-03-05 | Permitta        | L   | 0.212      | -            | -                | -                | -         |    -1.97 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            8 |     3685 | 2024-03-04 | Aurora          | W   | 0.206      | 0.500        | 0.433 (0.045)    | 0.800 (0.082)    | 0 (0.000) |     6.44 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            7 |     3702 | 2024-03-03 | BIG             | W   | 0.200      | 0.500        | 0.133 (0.013)    | 0.300 (0.030)    | 0 (0.000) |     5.88 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            6 |     3756 | 2024-03-01 | BLEED           | L   | 0.186      | -            | -                | -                | -         |    -1.39 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            5 |     3769 | 2024-02-29 | Zero Tenacity   | L   | 0.178      | -            | -                | -                | -         |    -0.73 | BluePho3nix, jocab, MisteM, REZ, Silence        |
|            4 |     3778 | 2024-02-28 | AMKAL           | W   | 0.172      | 0.500        | 0.132 (0.011)    | 0.484 (0.042)    | 0 (0.000) |     4.90 | BluePho3nix, maxster, MisteM, REZ, Silence      |
|            3 |     4004 | 2024-02-18 | ALTERNATE aTTaX | W   | 0.107      | 0.358        | 0.032 (0.001)    | 0.564 (0.022)    | 0 (0.000) |     2.67 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            2 |     4179 | 2024-02-11 | Portugal        | W   | 0.059      | 0.358        | 0.003 (0.000)    | 0.122 (0.003)    | 0 (0.000) |     0.77 | BluePho3nix, jocab, maxster, MisteM, Silence    |
|            1 |     4285 | 2024-02-03 | ex-Anonymo      | W   | 0.006      | 0.358        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.02 | BluePho3nix, jocab, maxster, MisteM, Silence    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,975.95)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-03-10 |      0.247 | $5,000.00      | $1,234.35       |
| 2024-03-06 |      0.219 | $12,500.00     | $2,741.60       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

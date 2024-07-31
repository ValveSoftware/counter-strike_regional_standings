### Roster Details<br />
Team Name: ATOX<br />
Roster: Annihilation, dobu, kabal, MiQ, Zesta<br />
Global Rank: [90](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [4]( ../standings_asia.md)<br />
<br />
Final Rank Value:  900.5<br />
<br />
Final Rank Value (900.5) = Starting Rank Value (875.6) + Head To Head Adjustments (24.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.373[<sup>1</sup>](#table2)
- Bounty Collected: 0.327[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.207[<sup>2</sup>](#table1)

The average of these factors is 0.230<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 875.6
- 400 + ( ( 0.230 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 875.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     1080 | 2024-06-09 | Lynn Vision | L   | 0.852      | -            | -                | -                | -         |    -9.87 | Annihilation, dobu, kabal, MiQ, Zesta |
|           16 |     1273 | 2024-06-06 | Lynn Vision | W   | 0.832      | 0.416        | 0.080 (0.028)    | 0.158 (0.055)    | 0 (0.000) |    16.78 | Annihilation, dobu, kabal, MiQ, Zesta |
|           15 |     1336 | 2024-06-05 | GR          | W   | 0.825      | 0.416        | 0.008 (0.003)    | 0.076 (0.026)    | 0 (0.000) |     5.87 | Annihilation, dobu, kabal, MiQ, Zesta |
|           14 |     1377 | 2024-06-04 | -72c        | W   | 0.818      | 0.416        | 0.003 (0.001)    | 0.038 (0.013)    | 0 (0.000) |     5.41 | Annihilation, dobu, kabal, MiQ, Zesta |
|           13 |     1465 | 2024-05-31 | Lynn Vision | L   | 0.795      | -            | -                | -                | -         |    -8.64 | Annihilation, dobu, kabal, MiQ, Zesta |
|           12 |     1518 | 2024-05-29 | BLEED       | L   | 0.783      | -            | -                | -                | -         |    -1.54 | Annihilation, dobu, kabal, MiQ, Zesta |
|           11 |     1541 | 2024-05-29 | OG          | W   | 0.777      | 0.500        | 0.144 (0.056)    | 0.133 (0.052)    | 1 (0.777) |    17.84 | Annihilation, dobu, kabal, MiQ, Zesta |
|           10 |     1833 | 2024-05-18 | The MongolZ | L   | 0.704      | -            | -                | -                | -         |    -0.07 | Annihilation, dobu, kabal, MiQ, Zesta |
|            9 |     1864 | 2024-05-17 | The Huns    | W   | 0.697      | 0.143        | 0.000 (0.000)    | 0.003 (0.000)    | 1 (0.697) |     1.36 | Annihilation, dobu, kabal, MiQ, Zesta |
|            8 |     3097 | 2024-04-02 | The MongolZ | L   | 0.398      | -            | -                | -                | -         |    -0.04 | Annihilation, dobu, kabal, MiQ, Zesta |
|            7 |     3103 | 2024-04-02 | Lynn Vision | L   | 0.397      | -            | -                | -                | -         |    -4.09 | Annihilation, dobu, kabal, MiQ, Zesta |
|            6 |     3459 | 2024-03-13 | -72c        | W   | 0.265      | 0.143        | 0.000 (0.000)    | 0.010 (0.000)    | 0 (0.000) |     0.55 | dobu, FlyNN, kabal, MiQ, Zesta        |
|            5 |     3470 | 2024-03-13 | ROUX        | W   | 0.264      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.54 | dobu, FlyNN, kabal, MiQ, Zesta        |
|            4 |     3791 | 2024-02-27 | FlyQuest    | L   | 0.169      | -            | -                | -                | -         |    -0.81 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            3 |     3815 | 2024-02-27 | TYLOO       | W   | 0.163      | 0.143        | 0.020 (0.000)    | 0.095 (0.002)    | 1 (0.163) |     1.83 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            2 |     3818 | 2024-02-26 | MAG         | W   | 0.162      | 0.143        | 0.000 (0.000)    | 0.010 (0.000)    | 1 (0.162) |     0.53 | AccuracyTG, dobu, kabal, MiQ, Zesta   |
|            1 |     3833 | 2024-02-25 | FlyQuest    | L   | 0.155      | -            | -                | -                | -         |    -0.74 | AccuracyTG, dobu, kabal, MiQ, Zesta   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,813.74)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: Aleksib, b1t, iM, jL, w0nderful<br />
Global Rank: [1](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [1]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1972.8<br />
<br />
Final Rank Value (1972.8) = Starting Rank Value (1992.1) + Head To Head Adjustments (-19.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.766[<sup>2</sup>](#table1)
- Opponent Network: 0.318[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.771<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1992.1
- 400 + ( ( 0.771 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1992.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |       14 | 2024-07-31 | BIG          | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.53 | Aleksib, b1t, iM, jL, w0nderful |
|           31 |      329 | 2024-07-21 | G2           | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.492 (0.492)    | 1 (1.000) |    15.52 | Aleksib, b1t, iM, jL, w0nderful |
|           30 |      361 | 2024-07-20 | MOUZ         | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.379 (0.379)    | 1 (1.000) |    13.56 | Aleksib, b1t, iM, jL, w0nderful |
|           29 |      391 | 2024-07-19 | FaZe         | W   | 1.000      | 1.000        | 0.643 (0.643)    | 0.410 (0.410)    | 1 (1.000) |     7.83 | Aleksib, b1t, iM, jL, w0nderful |
|           28 |      529 | 2024-07-17 | FURIA        | W   | 1.000      | 1.000        | 0.286 (0.286)    | 0.495 (0.495)    | 1 (1.000) |     4.15 | Aleksib, b1t, iM, jL, w0nderful |
|           27 |      848 | 2024-06-16 | Spirit       | L   | 0.899      | -            | -                | -                | -         |   -14.11 | Aleksib, b1t, iM, jL, w0nderful |
|           26 |      872 | 2024-06-15 | Virtus.pro   | W   | 0.893      | 0.729        | 0.483 (0.315)    | 0.327 (0.213)    | 1 (0.893) |     5.40 | Aleksib, b1t, iM, jL, w0nderful |
|           25 |      962 | 2024-06-13 | FaZe         | W   | 0.878      | 0.729        | 0.643 (0.412)    | 0.410 (0.263)    | 1 (0.878) |     7.48 | Aleksib, b1t, iM, jL, w0nderful |
|           24 |      991 | 2024-06-12 | Astralis     | W   | 0.872      | 0.729        | -                | 0.386 (0.245)    | 1 (0.872) |     5.86 | Aleksib, b1t, iM, jL, w0nderful |
|           23 |     1533 | 2024-05-29 | HEROIC       | L   | 0.779      | -            | -                | -                | -         |   -21.73 | Aleksib, b1t, iM, jL, w0nderful |
|           22 |     1554 | 2024-05-28 | Spirit       | L   | 0.773      | -            | -                | -                | -         |   -13.54 | Aleksib, b1t, iM, jL, w0nderful |
|           21 |     1572 | 2024-05-27 | BIG          | W   | 0.767      | -            | -                | -                | 1 (0.767) |     0.41 | Aleksib, b1t, iM, jL, w0nderful |
|           20 |     2138 | 2024-05-08 | FaZe         | L   | 0.640      | -            | -                | -                | -         |   -15.42 | Aleksib, b1t, iM, jL, w0nderful |
|           19 |     2188 | 2024-05-05 | Complexity   | L   | 0.620      | -            | -                | -                | -         |   -16.99 | Aleksib, b1t, iM, jL, w0nderful |
|           18 |     2260 | 2024-05-02 | BIG          | W   | 0.598      | -            | -                | -                | 1 (0.598) |     0.25 | Aleksib, b1t, iM, jL, w0nderful |
|           17 |     2287 | 2024-05-01 | FlyQuest     | W   | 0.591      | -            | -                | -                | -         |     0.22 | Aleksib, b1t, iM, jL, w0nderful |
|           16 |     3115 | 2024-03-31 | FaZe         | W   | 0.387      | -            | -                | -                | -         |     2.36 | Aleksib, b1t, iM, jL, w0nderful |
|           15 |     3120 | 2024-03-30 | G2           | W   | 0.381      | 1.000        | 1.000 (0.381)    | 0.492 (0.187)    | -         |     6.07 | Aleksib, b1t, iM, jL, w0nderful |
|           14 |     3130 | 2024-03-29 | Eternal Fire | W   | 0.373      | 1.000        | 0.759 (0.283)    | -                | -         |     2.39 | Aleksib, b1t, iM, jL, w0nderful |
|           13 |     3223 | 2024-03-24 | paiN         | W   | 0.340      | 1.000        | -                | 0.796 (0.270)    | -         |     0.49 | Aleksib, b1t, iM, jL, w0nderful |
|           12 |     3231 | 2024-03-23 | Cloud9       | L   | 0.334      | -            | -                | -                | -         |   -10.44 | Aleksib, b1t, iM, jL, w0nderful |
|           11 |     3247 | 2024-03-22 | Spirit       | L   | 0.326      | -            | -                | -                | -         |    -6.27 | Aleksib, b1t, iM, jL, w0nderful |
|           10 |     3265 | 2024-03-21 | G2           | W   | 0.320      | 1.000        | 1.000 (0.320)    | -                | -         |     5.12 | Aleksib, b1t, iM, jL, w0nderful |
|            9 |     3282 | 2024-03-21 | The MongolZ  | W   | 0.318      | 1.000        | 1.000 (0.318)    | 0.719 (0.228)    | -         |     4.35 | Aleksib, b1t, iM, jL, w0nderful |
|            8 |     4054 | 2024-02-16 | BetBoom      | W   | 0.093      | -            | -                | -                | -         |     0.13 | Aleksib, b1t, iM, jL, w0nderful |
|            7 |     4089 | 2024-02-15 | Virtus.pro   | L   | 0.086      | -            | -                | -                | -         |    -2.20 | Aleksib, b1t, iM, jL, w0nderful |
|            6 |     4119 | 2024-02-14 | Enterprise   | W   | 0.080      | -            | -                | -                | -         |     0.01 | Aleksib, b1t, iM, jL, w0nderful |
|            5 |     4136 | 2024-02-14 | KOI          | W   | 0.078      | -            | -                | -                | -         |     0.02 | Aleksib, b1t, iM, jL, w0nderful |
|            4 |     4233 | 2024-02-06 | Falcons      | L   | 0.026      | -            | -                | -                | -         |    -0.77 | Aleksib, b1t, iM, jL, w0nderful |
|            3 |     4241 | 2024-02-05 | Eternal Fire | W   | 0.020      | -            | -                | -                | -         |     0.12 | Aleksib, b1t, iM, jL, w0nderful |
|            2 |     4258 | 2024-02-04 | Apeks        | W   | 0.013      | -            | -                | -                | -         |     0.00 | Aleksib, b1t, iM, jL, w0nderful |
|            1 |     4284 | 2024-02-03 | Spirit       | L   | 0.006      | -            | -                | -                | -         |    -0.12 | Aleksib, b1t, iM, jL, w0nderful |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($690,787.85)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $400,000.00    | $400,000.00     |
| 2024-06-16 |      0.899 | $85,000.00     | $76,424.88      |
| 2024-06-02 |      0.807 | $5,000.00      | $4,034.40       |
| 2024-05-12 |      0.666 | $23,500.00     | $15,644.71      |
| 2024-03-31 |      0.387 | $500,000.00    | $193,257.72     |
| 2024-02-11 |      0.059 | $24,000.00     | $1,426.14       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: Mindfreak<br />
Roster: dpr, Drox, swerzieN, tucks, zune<br />
Global Rank: [218](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_02.md)<br />
Regional Rank: [27]( ../../standings_asia_2026_03_02.md)<br />
<br />
Final Rank Value:  659.3<br />
<br />
Final Rank Value (659.3) = Starting Rank Value (639.9) + Head To Head Adjustments (19.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 639.9
- 400 + ( ( 0.127 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 639.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     2016 | 2025-12-12 | Rooster           | W   | 0.670      | 0.303        | 0.007 (0.001)    | 0.306 (0.062)    | 0 (0.000) |    14.22 | Jau, Kiyo, swerzieN, tucks, zune        |
|           20 |     2017 | 2025-12-12 | THUNDER dOWNUNDER | L   | 0.670      | -            | -                | -                | -         |    -6.26 | Jau, Kiyo, swerzieN, tucks, zune        |
|           19 |     2143 | 2025-12-05 | LITE              | W   | 0.623      | 0.303        | 0.001 (0.000)    | 0.104 (0.020)    | 0 (0.000) |     8.82 | Jau, swerzieN, Texta, tucks, zune       |
|           18 |     3397 | 2025-10-25 | Animus Victoria   | W   | 0.345      | 0.278        | 0.000 (0.000)    | 0.040 (0.004)    | 0 (0.000) |     3.30 | dpr, Drox, swerzieN, tucks, zune        |
|           17 |     3463 | 2025-10-24 | Ground Zero       | L   | 0.339      | -            | -                | -                | -         |    -3.94 | dpr, Drox, swerzieN, tucks, zune        |
|           16 |     3511 | 2025-10-23 | Rooster           | W   | 0.332      | 0.278        | 0.005 (0.000)    | 0.086 (0.008)    | 0 (0.000) |     5.67 | dpr, Drox, swerzieN, tucks, zune        |
|           15 |     3658 | 2025-10-16 | Rooster           | L   | 0.285      | -            | -                | -                | -         |    -4.16 | dpr, Drox, swerzieN, tucks, zune        |
|           14 |     3698 | 2025-10-15 | SemperFi          | L   | 0.278      | -            | -                | -                | -         |    -1.33 | dpr, Drox, swerzieN, tucks, zune        |
|           13 |     4044 | 2025-10-06 | Animus Victoria   | W   | 0.218      | 0.278        | 0.000 (0.000)    | 0.040 (0.002)    | 0 (0.000) |     2.06 | dpr, Drox, swerzieN, tucks, zune        |
|           12 |     4106 | 2025-10-05 | KZG               | W   | 0.211      | 0.278        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.85 | dpr, Drox, swerzieN, tucks, zune        |
|           11 |     4109 | 2025-10-04 | Ground Zero       | L   | 0.210      | -            | -                | -                | -         |    -2.42 | dpr, Drox, swerzieN, tucks, zune        |
|           10 |     4150 | 2025-10-03 | Skele             | W   | 0.204      | 0.302        | 0.000 (0.000)    | 0.101 (0.006)    | 0 (0.000) |     3.13 | dpr, Drox, swerzieN, tucks, zune        |
|            9 |     4152 | 2025-10-03 | Ground Zero       | L   | 0.203      | -            | -                | -                | -         |    -2.34 | dpr, Drox, swerzieN, tucks, zune        |
|            8 |     4435 | 2025-09-27 | Aura              | W   | 0.158      | 0.302        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     1.04 | dpr, Drox, swerzieN, tucks, zune        |
|            7 |     4444 | 2025-09-26 | SemperFi          | L   | 0.157      | -            | -                | -                | -         |    -0.77 | dpr, Drox, swerzieN, tucks, zune        |
|            6 |     4445 | 2025-09-26 | Animus Victoria   | W   | 0.157      | 0.302        | 0.000 (0.000)    | 0.040 (0.002)    | 0 (0.000) |     1.49 | dpr, Drox, swerzieN, tucks, zune        |
|            5 |     5040 | 2025-09-10 | Ground Zero       | L   | 0.045      | -            | -                | -                | -         |    -0.52 | Crunchy, kairo, swerzieN, tucks, zune   |
|            4 |     5100 | 2025-09-09 | ex-TALON          | W   | 0.038      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.25 | Crunchy, kairo, swerzieN, tucks, zune   |
|            3 |     5138 | 2025-09-08 | Rooster           | L   | 0.032      | -            | -                | -                | -         |    -0.47 | Crunchy, kairo, swerzieN, tucks, zune   |
|            2 |     5218 | 2025-09-05 | KZG               | L   | 0.012      | -            | -                | -                | -         |    -0.26 | JohnSm1th, kairo, swerzieN, tucks, zune |
|            1 |     5236 | 2025-09-04 | Exsto             | W   | 0.004      | -            | -                | -                | -         |     0.03 | JohnSm1th, kairo, swerzieN, tucks, zune |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,033.24)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-13 |      0.677 | $1,322.00      | $894.84         |
| 2025-10-04 |      0.210 | $658.00        | $138.40         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

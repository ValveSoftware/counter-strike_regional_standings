### Roster Details<br />
Team Name: LAG<br />
Roster: consti, djay, kmrn, mason, Sandman<br />
Global Rank: [151](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_12_01.md)<br />
Regional Rank: [34]( ../../standings_americas_2025_12_01.md)<br />
<br />
Final Rank Value:  752.1<br />
<br />
Final Rank Value (752.1) = Starting Rank Value (707.8) + Head To Head Adjustments (44.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.072[<sup>2</sup>](#table1)
- LAN Wins: 0.030[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 707.8
- 400 + ( ( 0.162 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 707.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      408 | 2025-11-11 | BOSS                | L   | 1.000      | -            | -                | -                | -         |   -12.68 | consti, djay, kmrn, mason, Sandman    |
|           44 |      432 | 2025-11-10 | SkinRave            | L   | 1.000      | -            | -                | -                | -         |    -5.02 | consti, djay, kmrn, mason, Sandman    |
|           43 |      859 | 2025-10-29 | BOSS                | L   | 0.982      | -            | -                | -                | -         |   -14.11 | consti, djay, kmrn, mason, Sandman    |
|           42 |      954 | 2025-10-26 | Mythic              | W   | 0.963      | 0.363        | 0.002 (0.001)    | 0.261 (0.091)    | 0 (0.000) |    11.89 | consti, djay, kmrn, mason, Sandman    |
|           41 |     1013 | 2025-10-25 | OverKnight          | W   | 0.956      | 0.333        | 0.000 (0.000)    | 0.356 (0.114)    | 0 (0.000) |    12.41 | consti, djay, kmrn, mason, Sandman    |
|           40 |     1022 | 2025-10-25 | Marsborne           | L   | 0.955      | -            | -                | -                | -         |    -4.01 | consti, djay, kmrn, mason, Sandman    |
|           39 |     1072 | 2025-10-24 | Wanted Goons        | W   | 0.949      | 0.363        | -                | 0.139 (0.048)    | 0 (0.000) |     7.19 | consti, djay, kmrn, mason, Sandman    |
|           38 |     1197 | 2025-10-21 | Marsborne           | L   | 0.929      | -            | -                | -                | -         |    -3.96 | consti, djay, kmrn, mason, Sandman    |
|           37 |     1292 | 2025-10-16 | Phoenix             | W   | 0.896      | 0.333        | 0.003 (0.001)    | 0.282 (0.084)    | 0 (0.000) |    13.94 | consti, djay, kmrn, mason, Sandman    |
|           36 |     1400 | 2025-10-13 | Outfit 49           | W   | 0.875      | -            | -                | -                | 0 (0.000) |     6.46 | consti, djay, kmrn, mason, Sandman    |
|           35 |     1490 | 2025-10-09 | BOSS                | L   | 0.849      | -            | -                | -                | -         |   -12.33 | consti, djay, mason, Sandman, Wolffe  |
|           34 |     1536 | 2025-10-08 | Marsborne           | L   | 0.843      | -            | -                | -                | -         |    -3.24 | consti, djay, mason, Sandman, Wolffe  |
|           33 |     1651 | 2025-10-06 | FlyQuest RED        | W   | 0.829      | 0.363        | 0.014 (0.004)    | 0.346 (0.104)    | 0 (0.000) |    13.34 | consti, djay, mason, Sandman, Wolffe  |
|           32 |     2254 | 2025-09-21 | SportsBetExpert     | W   | 0.729      | 0.278        | 0.003 (0.001)    | -                | 0 (0.000) |     9.03 | consti, djay, mason, Sandman, Wolffe  |
|           31 |     2285 | 2025-09-20 | NuTorious           | W   | 0.722      | -            | -                | -                | 0 (0.000) |     5.72 | consti, djay, mason, Sandman, Wolffe  |
|           30 |     2344 | 2025-09-18 | SkinRave            | L   | 0.709      | -            | -                | -                | -         |    -3.44 | consti, djay, mason, Sandman, Wolffe  |
|           29 |     2376 | 2025-09-17 | Wanted Goons        | W   | 0.703      | 0.363        | -                | 0.139 (0.035)    | 0 (0.000) |     6.55 | consti, djay, mason, Sandman, Wolffe  |
|           28 |     2516 | 2025-09-13 | BOSS                | L   | 0.675      | -            | -                | -                | -         |    -8.50 | consti, djay, mason, Sandman, Wolffe  |
|           27 |     2563 | 2025-09-12 | anything else       | W   | 0.669      | -            | -                | -                | -         |     4.87 | consti, djay, mason, Sandman, Wolffe  |
|           26 |     2606 | 2025-09-11 | Voca                | L   | 0.662      | -            | -                | -                | -         |    -7.21 | consti, djay, mason, Sandman, Wolffe  |
|           25 |     2710 | 2025-09-09 | OverKnight          | W   | 0.649      | 0.363        | 0.000 (0.000)    | 0.356 (0.084)    | -         |     8.69 | consti, djay, mason, Sandman, Wolffe  |
|           24 |     3044 | 2025-08-27 | Voca                | L   | 0.562      | -            | -                | -                | -         |    -6.21 | consti, djay, mason, Sandman, Wolffe  |
|           23 |     3072 | 2025-08-26 | BOSS                | L   | 0.556      | -            | -                | -                | -         |    -7.65 | consti, djay, mason, Sandman, Wolffe  |
|           22 |     3134 | 2025-08-22 | regain              | W   | 0.529      | 0.333        | 0.003 (0.001)    | 0.364 (0.064)    | -         |     8.53 | consti, djay, mason, Sandman, Wolffe  |
|           21 |     3149 | 2025-08-21 | TSG                 | W   | 0.522      | 0.333        | -                | 0.206 (0.036)    | -         |     4.30 | consti, djay, mason, Sandman, Wolffe  |
|           20 |     3203 | 2025-08-19 | Voca                | L   | 0.510      | -            | -                | -                | -         |    -5.81 | consti, djay, mason, Sandman, Wolffe  |
|           19 |     3244 | 2025-08-17 | Money Crew          | W   | 0.495      | 0.278        | 0.001 (0.000)    | -                | -         |     5.78 | consti, djay, mason, Sandman, Wolffe  |
|           18 |     3318 | 2025-08-15 | InControl           | W   | 0.482      | 0.278        | 0.001 (0.000)    | -                | -         |     7.78 | brett, consti, mason, Sandman, Wolffe |
|           17 |     3405 | 2025-08-13 | OverKnight          | W   | 0.469      | 0.333        | -                | 0.356 (0.056)    | -         |     7.25 | brett, consti, mason, Sandman, Wolffe |
|           16 |     3515 | 2025-08-11 | Akimbo              | W   | 0.455      | 0.363        | 0.003 (0.001)    | -                | -         |     6.35 | brett, consti, mason, Sandman, Wolffe |
|           15 |     3867 | 2025-07-24 | Party Astronauts    | W   | 0.336      | -            | -                | -                | -         |     2.35 | brett, consti, mason, Sandman, Wolffe |
|           14 |     3934 | 2025-07-19 | Marsborne           | L   | 0.300      | -            | -                | -                | -         |    -0.76 | brett, consti, mason, Sandman, Wolffe |
|           13 |     3964 | 2025-07-18 | Derpy diamond dudes | W   | 0.295      | -            | -                | -                | 1 (0.295) |     1.43 | brett, consti, mason, Sandman, Wolffe |
|           12 |     3972 | 2025-07-18 | Marsborne           | L   | 0.294      | -            | -                | -                | -         |    -0.74 | brett, consti, mason, Sandman, Wolffe |
|           11 |     4080 | 2025-07-13 | SkinRave            | L   | 0.261      | -            | -                | -                | -         |    -1.79 | brett, consti, mason, Sandman, Wolffe |
|           10 |     4097 | 2025-07-12 | Arrival Seven       | W   | 0.255      | -            | -                | -                | -         |     2.21 | brett, consti, mason, Sandman, Wolffe |
|            9 |     4099 | 2025-07-12 | Getting Info        | L   | 0.255      | -            | -                | -                | -         |    -3.94 | brett, consti, mason, Sandman, Wolffe |
|            8 |     4130 | 2025-07-11 | Party Astronauts    | W   | 0.248      | -            | -                | -                | -         |     1.74 | brett, consti, mason, Sandman, Wolffe |
|            7 |     4276 | 2025-06-29 | Getting Info        | L   | 0.169      | -            | -                | -                | -         |    -2.68 | brett, consti, mason, Sandman, Wolffe |
|            6 |     4292 | 2025-06-26 | BLUEJAYS            | W   | 0.149      | -            | -                | -                | -         |     1.03 | brett, consti, mason, Sandman, Wolffe |
|            5 |     4396 | 2025-06-17 | MIGHT               | W   | 0.089      | -            | -                | -                | -         |     0.64 | brett, consti, mason, Sandman, Wolffe |
|            4 |     4429 | 2025-06-15 | Getting Info        | L   | 0.076      | -            | -                | -                | -         |    -1.21 | brett, consti, mason, Sandman, Wolffe |
|            3 |     4452 | 2025-06-14 | Zomblers            | W   | 0.069      | -            | -                | -                | -         |     1.05 | brett, consti, mason, Sandman, Wolffe |
|            2 |     4555 | 2025-06-11 | Party Astronauts    | L   | 0.049      | -            | -                | -                | -         |    -1.21 | brett, consti, mason, Sandman, Wolffe |
|            1 |     4586 | 2025-06-09 | Wanted Goons        | W   | 0.035      | -            | -                | -                | -         |     0.29 | brett, consti, mason, Sandman, Wolffe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,777.54)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-15 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-09-22 |      0.736 | $1,000.00      | $735.93         |
| 2025-08-17 |      0.495 | $1,750.00      | $865.85         |
| 2025-06-30 |      0.176 | $1,000.00      | $175.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

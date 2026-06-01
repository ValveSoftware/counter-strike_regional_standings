### Roster Details<br />
Team Name: Alter Ego<br />
Roster: BnTeT, Gratisfaction, PokemoN, Polbandana, tomiko<br />
Global Rank: [127](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [14]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  961.1<br />
<br />
Final Rank Value (961.1) = Starting Rank Value (890.1) + Head To Head Adjustments (71.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.267[<sup>1</sup>](#table2)
- Bounty Collected: 0.334[<sup>2</sup>](#table1)
- Opponent Network: 0.123[<sup>2</sup>](#table1)
- LAN Wins: 0.304[<sup>2</sup>](#table1)

The average of these factors is 0.257<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 890.1
- 400 + ( ( 0.257 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 890.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      671 | 2026-05-12 | THUNDER dOWNUNDER | L   | 1.000      | -            | -                | -                | -         |    -7.16 | BnTeT, Gratisfaction, PokemoN, Polbandana, tomiko |
|           20 |      716 | 2026-05-11 | Lynn Vision       | L   | 1.000      | -            | -                | -                | -         |    -2.40 | BnTeT, Gratisfaction, PokemoN, Polbandana, tomiko |
|           19 |      955 | 2026-05-02 | Rooster           | W   | 0.998      | 0.471        | 0.006 (0.003)    | 0.348 (0.163)    | 1 (0.998) |     7.89 | BnTeT, Gratisfaction, PokemoN, Polbandana, tomiko |
|           18 |     1012 | 2026-05-01 | Last Bullet       | W   | 0.991      | 0.471        | 0.003 (0.002)    | 0.256 (0.119)    | 1 (0.991) |    12.05 | BnTeT, Gratisfaction, PokemoN, Polbandana, tomiko |
|           17 |     1041 | 2026-04-30 | Just Swing        | W   | 0.986      | 0.471        | -                | 0.296 (0.137)    | 1 (0.986) |    10.44 | BnTeT, Gratisfaction, PokemoN, Polbandana, tomiko |
|           16 |     1131 | 2026-04-28 | Last Bullet       | L   | 0.972      | -            | -                | -                | -         |   -18.05 | bali, BOROS, Gratisfaction, PokemoN, Polbandana   |
|           15 |     1171 | 2026-04-27 | TYLOO             | L   | 0.966      | -            | -                | -                | -         |    -2.54 | bali, BOROS, Gratisfaction, PokemoN, Polbandana   |
|           14 |     1232 | 2026-04-26 | The QUBE          | W   | 0.960      | 0.333        | 0.004 (0.001)    | 0.259 (0.083)    | 0 (0.000) |    10.72 | bali, famouz, Gratisfaction, PokemoN, Polbandana  |
|           13 |     2595 | 2026-03-26 | FengDa            | L   | 0.753      | -            | -                | -                | -         |   -17.45 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|           12 |     2648 | 2026-03-25 | The QUBE          | W   | 0.747      | 0.333        | 0.004 (0.001)    | 0.259 (0.065)    | 0 (0.000) |     8.30 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|           11 |     2699 | 2026-03-24 | Just Swing        | W   | 0.740      | 0.333        | -                | 0.296 (0.073)    | 0 (0.000) |     7.29 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|           10 |     2781 | 2026-03-23 | Haunted House     | W   | 0.733      | 0.333        | 0.005 (0.001)    | -                | 0 (0.000) |     8.00 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            9 |     2830 | 2026-03-22 | Last Bullet       | W   | 0.727      | 0.333        | 0.003 (0.001)    | -                | 0 (0.000) |    11.57 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            8 |     2886 | 2026-03-21 | BORING PLAYERS    | L   | 0.720      | -            | -                | -                | -         |   -15.79 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            7 |     2952 | 2026-03-20 | Rare Atom         | W   | 0.713      | 0.333        | 0.010 (0.002)    | 0.340 (0.081)    | 0 (0.000) |    15.93 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            6 |     3330 | 2026-03-12 | Lynn Vision       | L   | 0.658      | -            | -                | -                | -         |    -1.66 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            5 |     3337 | 2026-03-11 | FlyQuest          | W   | 0.657      | 0.769        | 0.019 (0.010)    | 0.268 (0.135)    | 0 (0.000) |    15.23 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            4 |     3369 | 2026-03-11 | Chinggis Warriors | L   | 0.651      | -            | -                | -                | -         |    -4.56 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            3 |     3475 | 2026-03-09 | Rare Atom         | W   | 0.638      | 0.769        | 0.010 (0.005)    | 0.340 (0.167)    | -         |    15.21 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            2 |     3484 | 2026-03-08 | Lynn Vision       | W   | 0.637      | 0.769        | 0.156 (0.076)    | 0.414 (0.203)    | -         |    18.74 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            1 |     4960 | 2026-02-06 | Lynn Vision       | L   | 0.431      | -            | -                | -                | -         |    -0.72 | b1lal, BnTeT, Gratisfaction, Polbandana, rate     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,139.71)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-27 |      0.760 | $1,500.00      | $1,139.71       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

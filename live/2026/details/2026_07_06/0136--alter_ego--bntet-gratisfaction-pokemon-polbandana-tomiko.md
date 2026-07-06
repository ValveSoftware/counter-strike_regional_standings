### Roster Details<br />
Team Name: Alter Ego<br />
Roster: BnTeT, Gratisfaction, PokemoN, Polbandana, tomiko<br />
Global Rank: [136](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_06.md)<br />
Regional Rank: [14]( ../../standings_asia_2026_07_06.md)<br />
<br />
Final Rank Value:  871.3<br />
<br />
Final Rank Value (871.3) = Starting Rank Value (817.9) + Head To Head Adjustments (53.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.076[<sup>2</sup>](#table1)
- LAN Wins: 0.238[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 817.9
- 400 + ( ( 0.222 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 817.9


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
|           21 |     1332 | 2026-05-12 | THUNDER dOWNUNDER | L   | 0.833      | -            | -                | -                | -         |    -5.57 | BnTeT, Gratisfaction, PokemoN, Polbandana, tomiko |
|           20 |     1377 | 2026-05-11 | Lynn Vision       | L   | 0.826      | -            | -                | -                | -         |    -1.79 | BnTeT, Gratisfaction, PokemoN, Polbandana, tomiko |
|           19 |     1616 | 2026-05-02 | Rooster           | W   | 0.765      | 0.471        | 0.009 (0.003)    | 0.394 (0.142)    | 1 (0.765) |     7.87 | BnTeT, Gratisfaction, PokemoN, Polbandana, tomiko |
|           18 |     1673 | 2026-05-01 | Last Bullet       | W   | 0.758      | 0.471        | 0.002 (0.001)    | 0.206 (0.073)    | 1 (0.758) |     9.96 | BnTeT, Gratisfaction, PokemoN, Polbandana, tomiko |
|           17 |     1702 | 2026-04-30 | Just Swing        | W   | 0.753      | 0.471        | -                | 0.236 (0.083)    | 1 (0.753) |     8.60 | BnTeT, Gratisfaction, PokemoN, Polbandana, tomiko |
|           16 |     1792 | 2026-04-28 | Last Bullet       | L   | 0.739      | -            | -                | -                | -         |   -13.27 | bali, BOROS, Gratisfaction, PokemoN, Polbandana   |
|           15 |     1832 | 2026-04-27 | TYLOO             | L   | 0.733      | -            | -                | -                | -         |    -1.12 | bali, BOROS, Gratisfaction, PokemoN, Polbandana   |
|           14 |     1893 | 2026-04-26 | The QUBE          | W   | 0.726      | 0.333        | 0.003 (0.001)    | 0.201 (0.049)    | 0 (0.000) |     8.54 | bali, famouz, Gratisfaction, PokemoN, Polbandana  |
|           13 |     3256 | 2026-03-26 | FengDa            | L   | 0.520      | -            | -                | -                | -         |   -11.51 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|           12 |     3309 | 2026-03-25 | The QUBE          | W   | 0.514      | 0.333        | 0.003 (0.001)    | 0.201 (0.034)    | 0 (0.000) |     6.01 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|           11 |     3360 | 2026-03-24 | Just Swing        | W   | 0.507      | 0.333        | -                | 0.236 (0.040)    | 0 (0.000) |     5.55 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|           10 |     3442 | 2026-03-23 | Haunted House     | W   | 0.500      | 0.333        | 0.005 (0.001)    | -                | 0 (0.000) |     5.91 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            9 |     3491 | 2026-03-22 | Last Bullet       | W   | 0.494      | 0.333        | 0.002 (0.000)    | -                | 0 (0.000) |     7.97 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            8 |     3547 | 2026-03-21 | BORING PLAYERS    | L   | 0.487      | -            | -                | -                | -         |   -10.02 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            7 |     3613 | 2026-03-20 | Rare Atom         | W   | 0.480      | 0.333        | 0.006 (0.001)    | 0.249 (0.040)    | 0 (0.000) |     9.52 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            6 |     3991 | 2026-03-12 | Lynn Vision       | L   | 0.425      | -            | -                | -                | -         |    -0.92 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            5 |     3998 | 2026-03-11 | FlyQuest          | W   | 0.424      | 0.769        | 0.028 (0.009)    | 0.296 (0.096)    | 0 (0.000) |    11.15 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            4 |     4030 | 2026-03-11 | Chinggis Warriors | L   | 0.418      | -            | -                | -                | -         |    -3.46 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            3 |     4136 | 2026-03-09 | Rare Atom         | W   | 0.405      | 0.769        | 0.006 (0.002)    | 0.249 (0.078)    | -         |     8.37 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            2 |     4145 | 2026-03-08 | Lynn Vision       | W   | 0.404      | 0.769        | 0.148 (0.046)    | 0.412 (0.128)    | -         |    11.97 | BnTeT, BOROS, Gratisfaction, PokemoN, Polbandana  |
|            1 |     5621 | 2026-02-06 | Lynn Vision       | L   | 0.198      | -            | -                | -                | -         |    -0.33 | b1lal, BnTeT, Gratisfaction, Polbandana, rate     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($790.08)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-27 |      0.527 | $1,500.00      | $790.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

### Roster Details<br />
Team Name: ex-Sprout<br />
Roster: cej0t, podi, raalz, reiko, Sdaim<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [183](../standings_global.md)<br />
Regional Rank: [113]( ../standings_europe.md)<br />
Final Rank Value:  587.5<br />
<br />
Final Rank Value (587.5) = Starting Rank Value (555.0) + Head To Head Adjustments (32.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.076<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 555.0
- 400 + ( ( 0.076 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 555.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     2317 | 2024-03-28 | Rebels          | L   | 0.656      | -            | -                | -                | -         |    -1.15 | cej0t, podi, raalz, reiko, Sdaim            |
|           16 |     2391 | 2024-03-25 | ALTERNATE aTTaX | L   | 0.636      | -            | -                | -                | -         |    -1.84 | cej0t, podi, raalz, reiko, Sdaim            |
|           15 |     2421 | 2024-03-22 | Aurora          | L   | 0.616      | -            | -                | -                | -         |    -0.06 | BELCHONOKK, deko, KENSI, Lack1, Norwi       |
|           14 |     2492 | 2024-03-19 | B8              | L   | 0.594      | -            | -                | -                | -         |    -0.73 | cptkurtka023, esenthial, npl, OWNER, r1nkle |
|           13 |     2777 | 2024-03-07 | Alliance        | L   | 0.515      | -            | -                | -                | -         |    -2.54 | avid, b0denmaster, PlesseN, robiin, twist   |
|           12 |     2842 | 2024-03-05 | KOI             | L   | 0.502      | -            | -                | -                | -         |    -0.57 | cej0t, raalz, reiko, Sdaim, sL1m3           |
|           11 |     2885 | 2024-03-03 | BetBoom         | L   | 0.489      | -            | -                | -                | -         |    -0.05 | Buzz, cej0t, raalz, reiko, sL1m3            |
|           10 |     3353 | 2024-02-11 | Metizport       | L   | 0.348      | -            | -                | -                | -         |    -1.09 | adamb, Jackinho, nilo, susp, ztr            |
|            9 |     3379 | 2024-02-09 | fnatic          | W   | 0.335      | 0.143        | 0.290 (0.014)    | 0.666 (0.032)    | 0 (0.000) |    10.51 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            8 |     3380 | 2024-02-09 | 3DMAX           | W   | 0.335      | 0.143        | 0.186 (0.009)    | 1.000 (0.048)    | 0 (0.000) |    10.28 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            7 |     3400 | 2024-02-07 | Metizport       | L   | 0.322      | -            | -                | -                | -         |    -1.01 | adamb, Jackinho, nilo, susp, ztr            |
|            6 |     3551 | 2024-01-31 | ex-Preasy       | L   | 0.274      | -            | -                | -                | -         |    -1.25 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            5 |     3562 | 2024-01-30 | Nemiga          | L   | 0.269      | -            | -                | -                | -         |    -0.16 | 1eeR, FL4MUS, khaN, riskyb0b, Xant3r        |
|            4 |     3570 | 2024-01-30 | ECLOT           | W   | 0.269      | 0.143        | 0.107 (0.004)    | 0.478 (0.018)    | 0 (0.000) |     8.26 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |
|            3 |     3573 | 2024-01-30 | ALTERNATE aTTaX | L   | 0.268      | -            | -                | -                | -         |    -0.56 | awzek, FreeZe, Goody, PANIX, PerX           |
|            2 |     3578 | 2024-01-29 | Imperial fe     | W   | 0.261      | 0.143        | 0.180 (0.007)    | 0.351 (0.013)    | 0 (0.000) |     7.85 | ANa, hyskeee, Kat, tory, twenty3            |
|            1 |     3627 | 2024-01-26 | ex-Preasy       | W   | 0.240      | 0.371        | 0.038 (0.003)    | 0.304 (0.027)    | 0 (0.000) |     6.60 | Anlelele, cej0t, raalz, Sdaim, sL1m3        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

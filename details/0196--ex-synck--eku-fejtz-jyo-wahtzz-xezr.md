### Roster Details<br />
Team Name: ex-sYnck<br />
Roster: eku, fejtZ, Jyo, Wahtzz, xezr<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [196](../standings_global.md)<br />
Regional Rank: [119]( ../standings_europe.md)<br />
Final Rank Value:  536.4<br />
<br />
Final Rank Value (536.4) = Starting Rank Value (507.3) + Head To Head Adjustments (29.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.3
- 400 + ( ( 0.053 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 507.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |     2563 | 2024-03-15 | Endpoint          | L   | 0.568      | -            | -                | -                | -         |    -2.06 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           22 |     2597 | 2024-03-14 | Young Ninjas      | W   | 0.561      | 0.143        | 0.021 (0.002)    | 0.016 (0.001)    | 0 (0.000) |    13.74 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           21 |     2776 | 2024-03-07 | Sashi             | L   | 0.515      | -            | -                | -                | -         |    -0.64 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           20 |     2915 | 2024-03-02 | INGLORIOUS        | W   | 0.481      | 0.143        | 0.000 (0.000)    | 0.036 (0.003)    | 0 (0.000) |     8.21 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           19 |     2981 | 2024-02-27 | ECLOT             | L   | 0.454      | -            | -                | -                | -         |    -0.29 | Blytz, Dytor, forsyy, kreaz, nbqq        |
|           18 |     3054 | 2024-02-24 | ENCE Academy      | L   | 0.434      | -            | -                | -                | -         |    -2.37 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           17 |     3721 | 2024-01-21 | 3DMAX             | L   | 0.210      | -            | -                | -                | -         |    -0.12 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           16 |     3726 | 2024-01-21 | PERA              | L   | 0.209      | -            | -                | -                | -         |    -0.47 | Aaron, DGL, Kamion, msN, Porya           |
|           15 |     3730 | 2024-01-21 | Nexus             | L   | 0.208      | -            | -                | -                | -         |    -0.74 | BTN, ERSIN, ragga, s0und, XELLOW         |
|           14 |     3756 | 2024-01-20 | HEROIC            | L   | 0.203      | -            | -                | -                | -         |    -0.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS   |
|           13 |     3771 | 2024-01-20 | Entropiq          | W   | 0.201      | 0.143        | 0.000 (0.000)    | 0.133 (0.004)    | 0 (0.000) |     3.97 | c0llins, Marix, mwlky, oxygeN, tiziaN    |
|           12 |     3823 | 2024-01-19 | Enterprise        | L   | 0.195      | -            | -                | -                | -         |    -0.36 | bajmi, Demho, ex1st, fr3nd, TOAO         |
|           11 |     3867 | 2024-01-18 | FORZE             | W   | 0.189      | 0.143        | 0.000 (0.000)    | 0.017 (0.000)    | 0 (0.000) |     3.14 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|           10 |     3896 | 2024-01-18 | AMKAL             | L   | 0.188      | -            | -                | -                | -         |    -0.14 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            9 |     3922 | 2024-01-17 | FreeESPI          | L   | 0.184      | -            | -                | -                | -         |    -3.81 | MAGILA, maty, slokkerR, spardaus, tAk    |
|            8 |     4072 | 2024-01-13 | Permitta          | L   | 0.157      | -            | -                | -                | -         |    -0.40 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            7 |     4074 | 2024-01-13 | Gaimin Gladiators | L   | 0.157      | -            | -                | -                | -         |    -0.11 | kraghen, Nodios, Patti, Queenix, salazar |
|            6 |     4076 | 2024-01-13 | Betera            | W   | 0.156      | 0.143        | 0.002 (0.000)    | 0.089 (0.002)    | 0 (0.000) |     3.75 | alex666, lollipop21k, MaSvAl, nifee, sad |
|            5 |     4086 | 2024-01-13 | LOADING           | W   | 0.155      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.71 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            4 |     4089 | 2024-01-13 | 00NATION          | W   | 0.155      | 0.143        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     2.23 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            3 |     4164 | 2024-01-11 | HEROIC            | L   | 0.142      | -            | -                | -                | -         |    -0.00 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS   |
|            2 |     4172 | 2024-01-11 | PrizyvaNet        | W   | 0.142      | 0.143        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.58 | eku, fejtZ, Jyo, Wahtzz, xezr            |
|            1 |     4186 | 2024-01-10 | XI                | W   | 0.137      | 0.143        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.25 | eku, fejtZ, Jyo, Wahtzz, xezr            |

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

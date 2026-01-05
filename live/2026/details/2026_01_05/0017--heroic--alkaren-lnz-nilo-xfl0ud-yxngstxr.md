### Roster Details<br />
Team Name: HEROIC<br />
Roster: Alkaren, LNZ, nilo, xfl0ud, yxngstxr<br />
Global Rank: [17](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [14]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  1565.5<br />
<br />
Final Rank Value (1565.5) = Starting Rank Value (1554.2) + Head To Head Adjustments (11.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.694[<sup>1</sup>](#table2)
- Bounty Collected: 0.616[<sup>2</sup>](#table1)
- Opponent Network: 0.396[<sup>2</sup>](#table1)
- LAN Wins: 0.622[<sup>2</sup>](#table1)

The average of these factors is 0.582<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1554.2
- 400 + ( ( 0.582 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1554.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      671 | 2025-11-23 | BetBoom           | L   | 0.913      | -            | -                | -                | -         |   -18.26 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           33 |      684 | 2025-11-22 | Nuclear TigeRES   | W   | 0.907      | 0.435        | 0.049 (0.019)    | 0.996 (0.393)    | -         |     2.50 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           32 |      718 | 2025-11-21 | 500               | W   | 0.901      | 0.435        | -                | 1.000 (0.392)    | -         |     1.64 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           31 |     1266 | 2025-11-04 | Spirit            | L   | 0.791      | -            | -                | -                | -         |    -5.34 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           30 |     1291 | 2025-11-04 | Natus Vincere     | W   | 0.785      | 1.000        | 0.812 (0.638)    | 0.411 (0.322)    | 1 (0.785) |    20.18 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           29 |     1317 | 2025-11-03 | The MongolZ       | L   | 0.778      | -            | -                | -                | -         |    -4.67 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           28 |     1397 | 2025-10-31 | GamerLegion       | L   | 0.758      | -            | -                | -                | -         |   -13.33 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           27 |     1465 | 2025-10-28 | Aurora            | W   | 0.739      | 1.000        | 1.000 (0.739)    | 0.364 (0.269)    | 1 (0.739) |    17.52 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           26 |     1507 | 2025-10-27 | BetBoom           | W   | 0.732      | 1.000        | 0.229 (0.168)    | 0.933 (0.683)    | 1 (0.732) |     9.27 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           25 |     1566 | 2025-10-26 | Ninjas in Pyjamas | W   | 0.726      | 1.000        | 0.213 (0.154)    | 0.530 (0.384)    | 1 (0.726) |    10.86 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           24 |     1796 | 2025-10-18 | Liquid            | L   | 0.677      | -            | -                | -                | -         |    -7.12 | hades, LNZ, nilo, xfl0ud, yxngstxr   |
|           23 |     1816 | 2025-10-18 | Legacy            | L   | 0.672      | -            | -                | -                | -         |    -6.14 | hades, LNZ, nilo, xfl0ud, yxngstxr   |
|           22 |     1881 | 2025-10-16 | fnatic            | W   | 0.658      | 1.000        | 0.163 (0.107)    | 0.753 (0.495)    | 1 (0.658) |     9.37 | hades, LNZ, nilo, xfl0ud, yxngstxr   |
|           21 |     1921 | 2025-10-15 | FUT               | W   | 0.651      | 1.000        | 0.214 (0.139)    | 0.717 (0.466)    | 1 (0.651) |    10.25 | hades, LNZ, nilo, xfl0ud, yxngstxr   |
|           20 |     1947 | 2025-10-14 | B8                | W   | 0.644      | 1.000        | 0.259 (0.167)    | 0.451 (0.291)    | 1 (0.644) |    14.37 | hades, LNZ, nilo, xfl0ud, yxngstxr   |
|           19 |     2465 | 2025-10-01 | Astralis          | L   | 0.560      | -            | -                | -                | -         |    -7.63 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           18 |     2493 | 2025-09-30 | 3DMAX             | L   | 0.554      | -            | -                | -                | -         |    -5.34 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           17 |     2542 | 2025-09-29 | M80               | W   | 0.546      | 0.769        | 0.075 (0.032)    | 0.633 (0.266)    | 1 (0.546) |     6.87 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           16 |     2572 | 2025-09-28 | Gentle Mates      | L   | 0.541      | -            | -                | -                | -         |    -9.92 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           15 |     3013 | 2025-09-15 | Liquid            | L   | 0.453      | -            | -                | -                | -         |    -4.88 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           14 |     3036 | 2025-09-14 | paiN              | L   | 0.447      | -            | -                | -                | -         |    -7.24 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           13 |     3117 | 2025-09-13 | Legacy            | L   | 0.438      | -            | -                | -                | -         |    -3.51 | Alkaren, LNZ, nilo, xfl0ud, yxngstxr |
|           12 |     3701 | 2025-08-22 | Aurora            | L   | 0.293      | -            | -                | -                | -         |    -1.97 | Alkaren, LNZ, nilo, tN1R, yxngstxr   |
|           11 |     3742 | 2025-08-20 | Spirit            | W   | 0.281      | 1.000        | 0.789 (0.222)    | -                | 1 (0.281) |     7.32 | Alkaren, LNZ, nilo, tN1R, yxngstxr   |
|           10 |     4099 | 2025-08-11 | Passion UA        | W   | 0.220      | -            | -                | -                | -         |     0.05 | Alkaren, LNZ, nilo, tN1R, yxngstxr   |
|            9 |     4139 | 2025-08-10 | Aurora            | L   | 0.213      | -            | -                | -                | -         |    -1.42 | LNZ, nilo, Scr0b, tN1R, yxngstxr     |
|            8 |     4178 | 2025-08-08 | Passion UA        | W   | 0.201      | -            | -                | -                | -         |     3.40 | LNZ, nilo, Scr0b, tN1R, yxngstxr     |
|            7 |     4348 | 2025-07-28 | Ninjas in Pyjamas | L   | 0.126      | -            | -                | -                | -         |    -1.93 | gr1ks, LNZ, nilo, tN1R, yxngstxr     |
|            6 |     4382 | 2025-07-27 | Spirit            | L   | 0.119      | -            | -                | -                | -         |    -0.71 | gr1ks, LNZ, nilo, tN1R, yxngstxr     |
|            5 |     4419 | 2025-07-25 | Virtus.pro        | W   | 0.107      | -            | -                | -                | 1 (0.107) |     0.32 | gr1ks, LNZ, nilo, tN1R, yxngstxr     |
|            4 |     4433 | 2025-07-24 | MIBR              | W   | 0.101      | -            | -                | -                | -         |     0.33 | gr1ks, LNZ, nilo, tN1R, yxngstxr     |
|            3 |     4444 | 2025-07-23 | Ninjas in Pyjamas | L   | 0.094      | -            | -                | -                | -         |    -1.47 | gr1ks, LNZ, nilo, tN1R, yxngstxr     |
|            2 |     4579 | 2025-07-16 | BetBoom           | L   | 0.047      | -            | -                | -                | -         |    -0.80 | gr1ks, LNZ, nilo, tN1R, yxngstxr     |
|            1 |     4595 | 2025-07-15 | BIG               | L   | 0.041      | -            | -                | -                | -         |    -1.29 | gr1ks, LNZ, nilo, tN1R, yxngstxr     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($155,112.18)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.36) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-23 |      0.914 | $5,000.00      | $4,572.10       |
| 2025-11-09 |      0.819 | $25,000.00     | $20,463.76      |
| 2025-11-01 |      0.767 | $62,500.00     | $47,942.61      |
| 2025-10-19 |      0.679 | $90,000.00     | $61,070.67      |
| 2025-10-02 |      0.568 | $4,500.00      | $2,553.89       |
| 2025-09-21 |      0.494 | $7,500.00      | $3,708.36       |
| 2025-08-24 |      0.306 | $40,000.00     | $12,228.89      |
| 2025-08-10 |      0.214 | $2,500.00      | $534.36         |
| 2025-08-03 |      0.167 | $10,000.00     | $1,670.02       |
| 2025-07-20 |      0.074 | $5,000.00      | $367.50         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

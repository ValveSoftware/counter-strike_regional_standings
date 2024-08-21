### Roster Details<br />
Team Name: NAVI Junior<br />
Roster: cmtry, dem0n, dziugss, Krabeni, makazze<br />
Global Rank: [156](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [100]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  701.9<br />
<br />
Final Rank Value (701.9) = Starting Rank Value (700.0) + Head To Head Adjustments (1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.038[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 700.0
- 400 + ( ( 0.151 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 700.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      421 | 2024-08-08 | Illuminar  | L   | 1.000      | -            | -                | -                | -         |    -8.78 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           13 |      510 | 2024-08-06 | UNiTY      | L   | 1.000      | -            | -                | -                | -         |    -7.03 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           12 |     1865 | 2024-06-08 | Rhyno      | L   | 0.705      | -            | -                | -                | -         |    -4.54 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|           11 |     1984 | 2024-06-06 | Endpoint   | W   | 0.691      | 0.500        | 0.059 (0.020)    | 0.605 (0.209)    | 0 (0.000) |    17.16 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|           10 |     2035 | 2024-06-05 | Sampi      | L   | 0.685      | -            | -                | -                | -         |    -5.52 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|            9 |     2086 | 2024-06-04 | MOUZ NXT   | L   | 0.678      | -            | -                | -                | -         |    -2.47 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|            8 |     2106 | 2024-06-03 | Entropiq   | W   | 0.672      | 0.379        | 0.000 (0.000)    | 0.023 (0.006)    | 0 (0.000) |     3.23 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|            7 |     2214 | 2024-05-30 | Permitta   | L   | 0.646      | -            | -                | -                | -         |    -5.03 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|            6 |     2438 | 2024-05-21 | Illuminar  | W   | 0.586      | 0.379        | 0.011 (0.002)    | 0.405 (0.090)    | 0 (0.000) |    13.12 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|            5 |     3831 | 2024-03-30 | GL Academy | L   | 0.238      | -            | -                | -                | -         |    -3.66 | dem0n, dezt, Krabeni, Magic, makazze    |
|            4 |     3840 | 2024-03-29 | Passion UA | W   | 0.232      | 0.333        | 0.170 (0.013)    | 1.000 (0.077)    | 0 (0.000) |     6.35 | dem0n, dezt, Krabeni, Magic, makazze    |
|            3 |     3843 | 2024-03-29 | Sashi      | W   | 0.231      | 0.333        | 0.007 (0.001)    | 0.015 (0.001)    | 0 (0.000) |     3.23 | dem0n, dezt, Krabeni, Magic, makazze    |
|            2 |     3890 | 2024-03-27 | Metizport  | L   | 0.220      | -            | -                | -                | -         |    -2.46 | dem0n, dezt, Krabeni, Magic, makazze    |
|            1 |     4006 | 2024-03-20 | FORZE      | L   | 0.172      | -            | -                | -                | -         |    -1.68 | dem0n, froz1k, Krabeni, Magic, makazze  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($713.93)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

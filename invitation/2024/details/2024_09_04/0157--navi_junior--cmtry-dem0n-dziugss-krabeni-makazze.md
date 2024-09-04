### Roster Details<br />
Team Name: NAVI Junior<br />
Roster: cmtry, dem0n, dziugss, Krabeni, makazze<br />
Global Rank: [157](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [101]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  684.8<br />
<br />
Final Rank Value (684.8) = Starting Rank Value (683.9) + Head To Head Adjustments (0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.259[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 683.9
- 400 + ( ( 0.143 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 683.9


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
|           14 |      917 | 2024-08-08 | Illuminar  | L   | 1.000      | -            | -                | -                | -         |    -8.32 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           13 |     1006 | 2024-08-06 | UNiTY      | L   | 1.000      | -            | -                | -                | -         |    -7.08 | cmtry, dem0n, dziugss, Krabeni, makazze |
|           12 |     2361 | 2024-06-08 | Rhyno      | L   | 0.612      | -            | -                | -                | -         |    -4.68 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|           11 |     2480 | 2024-06-06 | Endpoint   | W   | 0.599      | 0.500        | 0.063 (0.019)    | 0.689 (0.206)    | 0 (0.000) |    15.56 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|           10 |     2531 | 2024-06-05 | Sampi      | L   | 0.593      | -            | -                | -                | -         |    -4.04 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|            9 |     2582 | 2024-06-04 | MOUZ NXT   | L   | 0.586      | -            | -                | -                | -         |    -2.16 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|            8 |     2602 | 2024-06-03 | Entropiq   | W   | 0.580      | 0.379        | 0.000 (0.000)    | 0.020 (0.004)    | 0 (0.000) |     3.02 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|            7 |     2710 | 2024-05-30 | Permitta   | L   | 0.554      | -            | -                | -                | -         |    -3.79 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|            6 |     2934 | 2024-05-21 | Illuminar  | W   | 0.494      | 0.379        | 0.010 (0.002)    | 0.394 (0.074)    | 0 (0.000) |    11.36 | cmtry, dem0n, dziugss, froz1k, Krabeni  |
|            5 |     4327 | 2024-03-30 | GL Academy | L   | 0.146      | -            | -                | -                | -         |    -2.28 | dem0n, dezt, Krabeni, Magic, makazze    |
|            4 |     4336 | 2024-03-29 | Passion UA | W   | 0.140      | 0.333        | 0.147 (0.007)    | 1.000 (0.047)    | 0 (0.000) |     3.83 | dem0n, dezt, Krabeni, Magic, makazze    |
|            3 |     4339 | 2024-03-29 | Sashi      | W   | 0.139      | 0.333        | 0.004 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     1.90 | dem0n, dezt, Krabeni, Magic, makazze    |
|            2 |     4386 | 2024-03-27 | Metizport  | L   | 0.127      | -            | -                | -                | -         |    -1.58 | dem0n, dezt, Krabeni, Magic, makazze    |
|            1 |     4502 | 2024-03-20 | FORZE      | L   | 0.080      | -            | -                | -                | -         |    -0.85 | dem0n, froz1k, Krabeni, Magic, makazze  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($437.39)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
